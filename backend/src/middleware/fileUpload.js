const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../upload')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

const fileSaver = (req, res, next) => {
    console.log(req.file)
    // res.send('This is file')
}

module.exports = { upload, fileSaver };
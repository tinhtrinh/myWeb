const multer = require('multer');
const fs = require('fs');
const path = require('path');

const formidable = require('formidable');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = '../upload/test';
        if(fs.existsSync(path) === false) fs.mkdirSync(path, {recursive: true})
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
    // var path = './upload/';

    // console.log(req.field)
    // if(fs.existsSync(path) === false) fs.mkdirSync(path, {recursive: true})
    
    const form = formidable({uploadDir: './upload/', keepExtensions: true});

    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log(err);
            return;
        }

        var oldPath = files.file.path;
        var newPath = path.join(__dirname, '../../upload') + '/' + fields.chapName + '/test';

        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err
            return res.send('Successfully renamed - AKA moved!')
        })
    });
}

module.exports = { upload, fileSaver };
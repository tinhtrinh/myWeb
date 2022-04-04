const express = require('express');

const { upload, fileSaver } = require('../middleware/fileUpload.js');
const controller = require('../controllers/chapter');

const router = express.Router();

router.get('/product/:pid', controller.getChaptersByPid);
// router.get('/:id', controller.getChapterByID);
router.post('/add', controller.addChapter);
router.post('/addChapterFiles', upload.single('profile'), fileSaver);

module.exports = router
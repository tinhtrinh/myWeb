const express = require('express');

const controller = require('../controllers/chapter');

const router = express.Router();

router.get('/product/:pid', controller.getChaptersByPid);
router.get('/:id', controller.getChapterByID);
router.post('/add', controller.addChapter);

module.exports = router
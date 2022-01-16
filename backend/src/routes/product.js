const express = require('express');

const controller = require('../controllers/product')

const router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.getProductByID);
router.get('/author/:id', controller.getProductByAuthorID)
router.post('/add', controller.addProduct);

module.exports = router;
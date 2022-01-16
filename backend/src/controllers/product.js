const Database = require('nedb');
db={}
db.product = new Database('./data/product.db');
db.product.loadDatabase();
products = db.product;

module.exports.index = function(req, res) {
    products.find({}, (err, data) => {
        res.json(data);
    })
}

module.exports.getProductByID = function(req, res) {
    var id = req.params.id;
    products.findOne({ _id: id }, (err, data) => {
        res.json(data)
    });
}

module.exports.getProductByAuthorID = function(req, res) {
    var id = req.params.id;
    products.find({ authorID: id }, (err, data) => {
        res.json(data)
    });
}

module.exports.addProduct = function(req, res) {
    const product = req.body;
    products.insert(product);
    res.json('sucess');
}
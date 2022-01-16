const Database = require('nedb');
db = {};
db.chapter = new Database('data/chapter.db');
db.product = new Database('data/product.db');
db.chapter.loadDatabase();
db.product.loadDatabase();
const chapters = db.chapter;
const products = db.product;

var mammoth = require('mammoth');
var htmlDocx = require('html-docx-js');
const utf8 = require('utf8');
const fs = require("fs");

module.exports.getChaptersByPid = function(req, res) {
    const pid = req.params.pid;
    chapters.find({ productID: pid }, (err, data) => {
        res.json(data)
    })
}

module.exports.getChapterByID = function (req, res) {
    const id = req.params.id;
    chapters.findOne({ _id: id }, (err, data) => {
        if(data){
            mammoth.convertToHtml({path: data.docxPath})
                .then(function(result) {
                    data.content = result.value;
                    res.json(data);
                })
                .done()
        }else{
            console.log('Chapter not found')
        }
    })
}

module.exports.addChapter = async (req, res) => {
    const chapter = req.body;
    const docxPath = `data/docx/${chapter.pName}/${chapter.name}.docx`;
    const converted = htmlDocx.asBlob('\ufeff' + chapter.content);
    await new Promise((resolve, reject) => {
        fs.writeFile(docxPath, converted, err => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        });
      });    
    await chapters.insert({
        ...chapter,
        content: '',
        docxPath: docxPath
    });

    await chapters.findOne({ name: chapter.name }, (err, data) => {
        if(data) {
            products.update({ _id: chapter.productID }, { $set: { newest: data._id, newestName: data.name } });
            chapters.update({ _id: chapter.backID }, { $set: { nextID: data._id } })
        }
    })
}
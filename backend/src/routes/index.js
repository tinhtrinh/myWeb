const productRoute = require('./product');
const chapterRoute = require('./chapter');
const authRoute = require('./auth')

const route = (app) => {
    app.use('/product', productRoute);
    app.use('/chapter', chapterRoute);
    app.use('/auth', authRoute);
}

module.exports = route;
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const route = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json('This is root')
})

route(app);

app.listen(5000, () => {
    console.log('Listening at 5000');
})
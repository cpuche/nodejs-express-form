const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const multer = require("multer")();
const ejs = require('ejs');
const port = 3000;

var app = express();

// urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// multipart/form-data
app.use(multer.array());
app.use(router);
app.use(express.static(`${__dirname}/public`));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public');

router.get("/", (req, res) => {
    res.render('index');
});

router.post("/submit", (req, res) => {
    res.render('response', { name: req.body.name });
});

app.listen(port);

console.log(`Application started - http://localhost:${port}`);

const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const multer = require("multer")();
const port = 3000;

var app = express();

// urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// multipart/form-data
app.use(multer.array());

app.set('view engine', 'pug');
app.set('views', __dirname + '/public');

app.use(router);

router.get("/", (req, res) => {
    res.render('index');
});

router.post("/submit", (req, res) => {
    if (req.body.name) {
        res.render('submit', { name: req.body.name });
    } else {
        res.redirect("/");
    }
});

app.listen(port);

console.log(`Application started - http://localhost:${port}`);

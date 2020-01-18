const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const multer = require("multer")();

var app = express();

// urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// multipart/form-data
app.use(multer.array());

app.use(router);

router.get("/", (req, res) => {
    res.send(req.query);
});

router.post("/", (req, res) => {
    res.send(req.body);
});

app.listen(3000);

console.log("La aplicación esta eschuchando en http://localhost:3000");

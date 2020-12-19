/*jslint node: true, nomen: true*/
"use strict";

var express = require("express");
const path = require("path");
var router = express.Router();

const templatePath = path.join(__dirname, "../templates");

router.get("/", function (req, res, next) {
  res.status(200).sendFile(`${templatePath}/index/index.html`);
  // res.status(200).send({message: 'Hello!'})
  // res.status(200).json({message: 'Hello!'})
});

module.exports = router;

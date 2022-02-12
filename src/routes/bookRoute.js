const express = require('express');
const app = express.Router();
const bookController = require('../controllers/bookController');
const auth = require("../middleware/auth");

app.post("/", bookController.addBook);
app.get("/", bookController.getBooks);


module.exports = app;


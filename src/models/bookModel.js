const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    book_id: String,
    name: String,
    author: String,
    publisher:String,
    price:Number
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title: { type: String },
    subtitle: String,
    author: { type: String},
    link: { type: String},
    discription: { type: String },
    image: { type: String },
    googleId: { type: String, unique: true}

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema ({

    title: { type: String, required: true },
    subtitle: String,
    author: { type: String, required: true},
    link: { type: String},
    discription: { type: String, required: true },
    image: { type: String, required: true },
    googleId: { type: String, unique: true}

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
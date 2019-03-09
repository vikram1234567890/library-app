// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const BooksSchema = new Schema(

  {

    bookImageUrl: String,
    bookName: String,
    bookAuthor: String,
    bookISBN: String,
    bookPrice: String,
    addedByibrarianId: String
  },
  { timestamps: true }
);


// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("books", BooksSchema);
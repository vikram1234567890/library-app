
// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// this will be our data base's data structure 
const ReturnedBooksSchema = new Schema(

  {

    studentId: String,
    bookId: String,
    timePeriodKeeping: String,
    takenDate: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("returnedBooks", ReturnedBooksSchema);
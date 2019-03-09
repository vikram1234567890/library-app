
// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// this will be our data base's data structure 
const RentedBooksSchema = new Schema(

  {

    studentId: String,
    bookId: String,
    timePeriodKeeping: String
  },
  { timestamps: true }
);
module.exports = mongoose.model("rentedBooks", RentedBooksSchema);
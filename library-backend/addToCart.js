
// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// this will be our data base's data structure 
const CartSchema = new Schema(

  {

    bookId: String,
    studentId: String
  },
  { timestamps: true }
);
module.exports = mongoose.model("carts", CartSchema);
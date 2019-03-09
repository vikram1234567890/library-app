
// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const LibrariansSchema = new Schema(

  {

    name: String,
    email: String,
    password: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("librarians", LibrariansSchema);
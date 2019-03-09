
// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// this will be our data base's data structure 
const Login = new Schema(

  {

    email: String,
    password: String
  }
);

module.exports = mongoose.model("students", Login);
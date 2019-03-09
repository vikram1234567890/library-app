const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const AddBook = require("./addBook");
const AddReturnedBook = require("./addReturnedBook");
const AddRentedBook = require("./addRentedBook");
const AddLibrarian = require("./addLibrarian");
const AddStudent = require("./addStudent");
const AddToCart = require("./addToCart");

const API_PORT = 3001;
const app = express();
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb://localhost:27017/libraryappdb";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
router.post("/login", (req, res) => {
  const { email,password } = req.body;

  AddToCart.find({email:email,password:password},(err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
// this is our get method
// this method fetches all available data in our database
router.get("/getBooks", (req, res) => {
  AddBook.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
router.get("/getCartData", (req, res) => {
  const { studentId } = req.body;

  AddToCart.find({studentId:studentId},(err, data) => {
    if (err) return res.json({ success: false, error: err });
    return getBooksFromArray(res,data);
  });
});

function getBooksFromArray(res1,data1){
  router.get("/getBooks", (req, res) => {
  AddBook.find({_id:[mongoose.Types.ObjectId(data1)]},(err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

}
router.get("/getRentedBooks", (req, res) => {
      const { id } = req.body;

  AddRentedBook.find({_id:id},(err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
router.get("/getStudents", (req, res) => {
  AddStudent.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});


// this is our create methid
// this method adds new data in our database
router.post("/addBook", (req, res) => {
  let data = new AddBook();

  const {  bookImageUrl,bookName,bookAuthor,bookISBN,bookPrice,addedByibrarianId} = req.body;

  if (!bookImageUrl || !bookName|| !bookAuthor|| !bookISBN|| !bookPrice|| !addedByibrarianId) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.bookImageUrl = bookImageUrl;
  data.bookName = bookName;
  data.bookAuthor = bookAuthor;
  data.bookISBN = bookISBN;
  data.bookPrice = bookPrice;
  data.addedByibrarianId = addedByibrarianId;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/addLibrarian", (req, res) => {
  let data = new AddLibrarian();

  const {  name,email,password} = req.body;

  if (!name || !email|| !password) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.name = name;
  data.email = email;
  data.password = password;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/addStudent", (req, res) => {
  let data = new AddStudent();

  const {  name,email,password} = req.body;

  if (!name || !email|| !password) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.name = name;
  data.email = email;
  data.password = password;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/addRentedBook", (req, res) => {
  let data = new AddRentedBook();

  const {  studentId,bookId,timePeriodKeeping} = req.body;

  if (!studentId || !bookId|| !timePeriodKeeping) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.studentId = studentId;
  data.bookId = bookId;
  data.timePeriodKeeping = timePeriodKeeping;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/addReturnedBook", (req, res) => {
  let data = new AddReturnedBook();

  const {  studentId,bookId,timePeriodKeeping,takenDate} = req.body;

  if (!studentId || !bookId|| !timePeriodKeeping|| !takenDate) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.studentId = studentId;
  data.bookId = bookId;
  data.timePeriodKeeping = timePeriodKeeping;

  data.takenDate = takenDate;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});
// this is our create methid
// this method adds new data in our database
router.post("/addToCart", (req, res) => {
  let data = new AddToCart();

  const {  studentId,bookId,timePeriodKeeping} = req.body;

  if (!bookId || !studentId) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }

  data.bookId = bookId;
  data.studentId = studentId;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});
// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
import React, { Component } from "react";

import "./css/styles.css";
class BookForStudent extends Component {
  state = {
    newBookImage: require("./images/" + "new_book.png"),
    oldBookImage: require("./images/" + "old_book.png")
  };
  render() {
    return <React.Fragment>{this.bookDetails}</React.Fragment>;
  }
  bookDetails = (
    <li>
      <div>
        <img src={this.state.newBookImage} width="150" height="150" />
      </div>

      <div>
        <b>Book Name</b>
      </div>
      <div>Book Author</div>
      <div>ISBN</div>
      <div>
        <b>₹ 0.0</b>
      </div>
      <div>
        <button className="student-book-btn">Add To Cart</button>
      </div>
    </li>
  );
}

export default BookForStudent;

import React, { Component } from "react";

class Book extends Component {
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
        <img src={this.props.data.bookImageUrl} width="150" height="150" />
      </div>

      <div>
        <b>{this.props.data.bookName}</b>
      </div>
      <div>{this.props.data.bookAuthor}</div>
      <div>{this.props.data.bookISBN}</div>
      <div>
        <b>₹ 0.0</b>
      </div>
    </li>
  );
}

export default Book;

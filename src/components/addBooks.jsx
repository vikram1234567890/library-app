import React, { Component } from "react";

import axios from "axios";
import "./css/styles.css";
class AddBooks extends Component {
  state = {
    bookName: "Book Name *",
    bookAuthor: "Book Author *",
    bookISBN: "Book ISBN *",
    bookTitleImgUrl: "Book title image URL *"
  };
  render() {
    return (
      <React.Fragment>
        <div className="add-book-page">
          <div>
            <h3>Enter book details</h3>
            <form>
              <div className="form-group">
                <label for="book_name">{this.state.bookName}</label>
                <center>
                  <input
                    id="book_name"
                    type="text"
                    className="form-control"
                    placeholder={this.state.bookName}
                    required
                  />
                </center>
              </div>
              <div className="form-group">
                <label for="book_author">{this.state.bookAuthor}</label>
                <center>
                  <input
                    id="book_author"
                    type="text"
                    className="form-control"
                    placeholder={this.state.bookAuthor}
                    required
                  />
                </center>
              </div>
              <div className="form-group">
                <label for="book_isbn">{this.state.bookISBN}</label>
                <center>
                  <input
                    id="book_isbn"
                    type="text"
                    className="form-control"
                    placeholder={this.state.bookISBN}
                    required
                  />
                </center>
              </div>
              <div className="form-group">
                <label for="book_title_img_url">
                  {this.state.bookTitleImgUrl}
                </label>
                <center>
                  <input
                    id="book_title_img_url"
                    type="URL"
                    className="form-control"
                    placeholder={this.state.bookTitleImgUrl}
                    required
                  />
                </center>
              </div>
              <div>
                <button className="add_book-btn" onClick={this.insertBook}>
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }

  insertBook = e => {
    axios.post("http://localhost:3001/api/addBook", {
      bookImageUrl: document.getElementById("book_title_img_url").value,
      bookName: document.getElementById("book_name").value,
      bookAuthor: document.getElementById("book_author").value,
      bookISBN: document.getElementById("book_isbn").value,
      bookPrice: "0.0",
      addedByibrarianId: document.getElementById("book_name").value
    });
  };
}

export default AddBooks;

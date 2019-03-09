import React, { Component } from "react";
import Book from "./book";
class BooksTaken extends Component {
  state = {
    books: [
      { id: 0, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="table book-rented-page">
          <h3>Books taken by student_name</h3>
          <ul id="horizontal-list">
            {this.state.books.map(book => (
              <Book key={book.id} />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default BooksTaken;

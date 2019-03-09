import React, { Component } from "react";
import "./css/styles.css";

import ReactDOM from "react-dom";
import StudentRentedBook from "./studentRentedBook";
class StudentRentedBooksList extends Component {
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
        <div className="table">
          <ul id="horizontal-list">
            {this.state.books.map(book => (
              <StudentRentedBook key={book.id} />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default StudentRentedBooksList;

import React, { Component } from "react";

import ReactDOM from "react-dom";

import "./css/styles.css";
import AddBooks from "./addBooks";
import BooksList from "./booksList";
import StudentsList from "./studentsList";
import RentedBooksList from "./rentedBookByStudentLists";

class LibrarianDashboard extends Component {
  state = {
    availableBooks: "availabe_books",
    studentRentedBooks: "students_rented_books",
    students: "students",
    selectedHeader: "availabe_books"
  };
  render() {
    return (
      <React.Fragment>
        <div className="student-header">
          Welcome Librarian
          <button className="add-book-btn" onClick={this.addBook}>
            Add Book
          </button>
          <button className="logout-btn">Logout</button>
        </div>
        <ul id="horizontal-list">
          <li>
            <button
              id="availabe_books"
              onClick={() => this.changeView("availabe_books")}
              className="header-btn-selected"
            >
              Available Books
            </button>
          </li>
          <li>
            <button
              id="students"
              onClick={() => this.changeView("students")}
              className="header-btn-unselect"
            >
              Students
            </button>
          </li>
          <li>
            <button
              id="students_rented_books"
              onClick={() => this.changeView("students_rented_books")}
              className="header-btn-unselect"
            >
              Rented books by students
            </button>
          </li>
        </ul>
        <div id="container">{this.innerPage()}</div>
      </React.Fragment>
    );
  }

  changeView = btnId => {
    this.state.selectedHeader = btnId;
    this.setState({ selectedHeader: btnId });

    this.changeSelectedHeaderBg(btnId);
  };
  innerPage = () => {
    let innerPage = this.containerviews();
    return innerPage;
  };
  containerviews = () => {
    if (this.state.selectedHeader === this.state.availableBooks) {
      return <BooksList />;
    } else if (this.state.selectedHeader === this.state.students) {
      return <StudentsList />;
    } else if (this.state.selectedHeader === this.state.studentRentedBooks) {
      return <RentedBooksList />;
    }
  };
  addBook() {
    ReactDOM.render(<AddBooks />, document.getElementById("root"));
  }
  changeSelectedHeaderBg = btnId => {
    let bg = "header-btn-selected";
    let bg_unselect = "header-btn-unselect";
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      if (button.id !== "") {
        document.getElementById(button.id).classList.remove(bg);

        document.getElementById(button.id).classList.add(bg_unselect);
      }
    }

    document.getElementById(btnId).classList.remove(bg_unselect);
    document.getElementById(btnId).classList.add(bg);
  };
}

export default LibrarianDashboard;

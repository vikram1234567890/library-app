import React, { Component } from "react";
import BooksListForStudent from "./booksListForStudent";

import ReactDOM from "react-dom";
import MyCart from "./myCart";

import StudentRentedBooksList from "./studentRentedBooksList";
class StudentDashboard extends Component {
  state = {
    availableBooks: "availabe_books",
    myRentedBooks: "my_rented_books",
    selectedHeader: "availabe_books",
    cartImage: require("./images/cart.png"),
    cartItemsCount: 10
  };
  render() {
    return (
      <React.Fragment>
        <div className="student-header">
          <button className="cart-items-count-style" disabled>
            ({this.state.cartItemsCount})
          </button>
          <img
            className="cart-logo-style"
            src={this.state.cartImage}
            width="25"
            height="25"
            onClick={this.myCartPage}
          />
          <button className="logout-btn">Logout</button>
        </div>
        <ul id="horizontal-list">
          <li>
            <button
              id="availabe_books"
              onClick={() => this.changeView(this.state.availableBooks)}
              className="header-btn-selected"
            >
              Available Books
            </button>
          </li>
          <li>
            <button
              id="my_rented_books"
              onClick={() => this.changeView(this.state.myRentedBooks)}
              className="header-btn-unselect"
            >
              My Rented Books
            </button>
          </li>
        </ul>
        <div id="container">{this.innerPage()}</div>
      </React.Fragment>
    );
  }

  changeView = btnId => {
    this.state.selectedHeader = btnId;

    this.setState({ showBooks: btnId });

    this.changeSelectedHeaderBg(btnId);
  };
  innerPage = () => {
    let innerPage = this.continerviews();
    return innerPage;
  };
  continerviews = () => {
    if (this.state.selectedHeader === this.state.availableBooks) {
      return <BooksListForStudent />;
    } else if (this.state.selectedHeader === this.state.myRentedBooks) {
      return <StudentRentedBooksList />;
    }
  };
  myCartPage() {
    ReactDOM.render(<MyCart />, document.getElementById("root"));
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

export default StudentDashboard;

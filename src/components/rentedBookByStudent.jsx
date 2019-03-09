import React, { Component } from "react";

import ReactDOM from "react-dom";
import "./css/styles.css";
import BooksTaken from "./booksTaken";
class RentedBook extends Component {
  state = {
    profile_pic: require("./images/" + "profile_pic.png")
  };
  render() {
    return (
      <React.Fragment>
        <li>
          <div>
            <img src={this.state.profile_pic} width="150" height="150" />
          </div>

          <div>
            <b>Student Name</b>
          </div>
          <div>Student Email</div>
          <div>
            <button
              className="student-book-btn"
              onClick={this.booksTakenDetails}
            >
              Book(s) taken : 3
            </button>
          </div>
        </li>
      </React.Fragment>
    );
  }
  booksTakenDetails() {
    ReactDOM.render(<BooksTaken />, document.getElementById("root"));
  }
}

export default RentedBook;

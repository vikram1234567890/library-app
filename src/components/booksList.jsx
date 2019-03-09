import React, { Component } from "react";
import "./css/styles.css";

import axios from "axios";
import Book from "./book";
import ReactDOM from "react-dom";
class BooksList extends Component {
  state = {
    data: []
  };
  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div className="table">
          <ul id="horizontal-list">
            {this.state.data.map(data => (
              <Book data={data} />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getBooks();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getBooks, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }
  getBooks = () => {
    fetch("http://localhost:3001/api/getBooks")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };
}

export default BooksList;

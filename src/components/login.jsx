import React, { Component } from "react";

import ReactDOM from "react-dom";
import Register from "./register";
import AddBooks from "./addBooks";

import axios from "axios";
import "./css/styles.css";
import BooksListForStudent from "./booksListForStudent";
import StudentsList from "./studentsList";
import StudentDashboard from "./studentDashboard";
import LibrarianDashboard from "./librarianDashboard";
import Footer from "./footer";
class Login extends Component {
  state = {
    data: [],
    student: "student_login",
    librarian: "librarian_login",
    login_user: "student_login",
    email: "Email *",
    password: "Password *"
  };
  render() {
    return (
      <React.Fragment>
        <div className="login-page">
          <p id="error" />
          <div>
            <div>
              <button
                id={this.state.student}
                onClick={() => this.loginType(this.state.student)}
                className="header-btn-selected"
              >
                Student Login
              </button>
              <button
                id={this.state.librarian}
                onClick={() => this.loginType(this.state.librarian)}
                className="header-btn-unselect"
              >
                Librarian Login
              </button>
              <form onSubmit={this.nextPage}>
                <div>
                  <label for="email">{this.state.email}</label>
                  <center>
                    <input
                      id="email"
                      type="text"
                      className="form-control"
                      placeholder={this.state.email}
                      required
                    />
                  </center>
                </div>

                <label for="password">{this.state.password}</label>
                <div>
                  <center>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      placeholder={this.state.password}
                      required
                    />
                  </center>
                </div>
                <div>
                  <input className="login-btn" type="submit" value="Login" />
                  <p className="or-text">Or</p>
                  <button className="register-btn" onClick={this.registerForm}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getLogin();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getLogin, 1000);
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
  getLogin = () => {
    fetch("http://localhost:3001/api/login")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  nextPage = e => {
    if (this.state.data.length === 0) {
      document.getElementById("error").innerHTML = "INvalid login";

      e.preventDefault();
    }
    if (this.state.login_user === this.state.student) {
      this.studentDashboard();
    } else if (this.state.login_user === this.state.librarian) {
      this.librarianDashboard();
    }
  };
  registerForm() {
    ReactDOM.render(<Register />, document.getElementById("root"));
  }

  studentDashboard() {
    ReactDOM.render(<StudentDashboard />, document.getElementById("root"));
  }

  librarianDashboard() {
    ReactDOM.render(<LibrarianDashboard />, document.getElementById("root"));
  }
  loginType = btnId => {
    this.state.login_user = btnId;
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

export default Login;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./login";
import Footer from "./footer";
import axios from "axios";
class Register extends Component {
  state = {
    student: "student_register",
    librarian: "librarian_register",

    register_user: "student_register",
    name: "Name *",
    email: "Email *",
    password: "Password *",
    reEnterPassword: "Re-enter password *",
    inputName: null,
    inputEmail: null,
    inputPassword: null,

    data: null
  };
  putDataToDB = data => {
    axios.post("http://localhost:3001/api/putData", {
      data: data
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="register-page">
          <h5 id="error" />
          <div>
            <button
              id={this.state.student}
              onClick={() => this.registerType(this.state.student)}
              className="header-btn-selected"
            >
              Student Registratraion
            </button>
            <button
              id={this.state.librarian}
              onClick={() => this.registerType(this.state.librarian)}
              className="header-btn-unselect"
            >
              Librarian Registratraion
            </button>
            <form>
              <div>
                <label for="name">{this.state.name}</label>
                <center>
                  <input
                    id="name"
                    type="text"
                    placeholder={this.state.name}
                    className="form-control"
                    onChange={this.setState(this.inputName)}
                    required
                  />
                </center>
              </div>
              <div>
                <label for="email">{this.state.email}</label>
                <center>
                  <input
                    id="email"
                    type="text"
                    placeholder={this.state.email}
                    className="form-control"
                    required
                  />
                </center>
              </div>
              <div>
                <label for="password">{this.state.password}</label>
                <center>
                  <input
                    id="password"
                    type="password"
                    placeholder={this.state.password}
                    className="form-control"
                    required
                  />
                </center>
              </div>
              <div>
                <label for="reenter_password">
                  {this.state.reEnterPassword}
                </label>
                <center>
                  <input
                    id="reenter_password"
                    type="password"
                    placeholder={this.state.reEnterPassword}
                    className="form-control"
                    required
                  />
                </center>
              </div>
              <div>
                <input
                  className="register-btn"
                  type="submit"
                  value="Register"
                  onClick={this.onSubmit}
                />
                <p className="or-text">Or</p>
                <button className="login-btn" onClick={this.loginForm}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
  onSubmit = e => {
    this.state.inputName = document.getElementById("name").value;
    this.state.inputEmail = document.getElementById("email").value;
    this.state.inputPassword = document.getElementById("password").value;

    if (
      this.state.inputPassword !==
      document.getElementById("reenter_password").value
    ) {
      document.getElementById("error").innerHTML = "Password do not match";

      e.preventDefault();
    }
    this.nextPage();
  };
  nextPage = () => {
    if (this.state.register_user === this.state.student) {
      this.insertStudent();
    } else if (this.state.register_user === this.state.librarian) {
      this.insertLibrarian();
    }
  };
  insertStudent = () => {
    axios.post("http://localhost:3001/api/addStudent", {
      name: this.state.inputName,
      email: this.state.inputEmail,
      password: this.state.inputPassword
    });
  };
  insertLibrarian = () => {
    axios.post("http://localhost:3001/api/addLibrarian", {
      name: this.state.inputName,
      email: this.state.inputEmail,
      password: this.state.inputPassword
    });
  };
  loginForm() {
    ReactDOM.render(<Login />, document.getElementById("root"));
  }
  registerType = btnId => {
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

export default Register;

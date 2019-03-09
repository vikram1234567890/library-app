import React, { Component } from "react";
import "./css/styles.css";

class Student extends Component {
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
            <b>{this.props.data.name}</b>
          </div>
          <div>{this.props.data.email}</div>
        </li>
      </React.Fragment>
    );
  }
}

export default Student;

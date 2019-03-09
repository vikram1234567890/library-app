import React, { Component } from "react";
class CartItem extends Component {
  state = {};
  render() {
    return (
      <li>
        <div>
          <div>
            <b>{this.props.data.name}</b>
          </div>
          <div>{this.props.data.name}</div>
          <div>{this.props.data.name}</div>
          <div>
            <b>₹ 0.0</b>
          </div>
        </div>
      </li>
    );
  }
}

export default CartItem;

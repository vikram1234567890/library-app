import React, { Component } from "react";
import CartItem from "./cartItem";
class MyCart extends Component {
  state = {
    newBookImage: require("./images/" + "new_book.png"),

    data: []
  };
  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        {" "}
        <div className="cart-lists">
          <h3>My Cart ({this.props.cartItemsCount} item(s))</h3>
          <ul id="horizontal-list">
            <li>
              <div>
                <img src={this.state.newBookImage} width="80" height="80" />
              </div>
            </li>
            {this.state.data.map(data => (
              <CartItem data={data} />
            ))}
            <li>
              <div>
                <button className="remove-btn">Remove</button>
              </div>
            </li>
          </ul>

          <div>
            <div>
              <b>Select time period to take book(s)</b>
            </div>
            <input id="read_period" type="date" required />
          </div>
          <div>
            <button className="rent-btn">Take on rent</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getCart();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getCart, 1000);
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
  getCart = () => {
    fetch("http://localhost:3001/api/getCartData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };
}

export default MyCart;

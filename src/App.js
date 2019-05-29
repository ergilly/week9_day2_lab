import React, { Component } from "react";
import { connect } from "react-redux";
import CustomersList from "./CustomersList";
// import containers
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getCustomers();
  }

  render() {
    return (
      <div className="App">
        <CustomersList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCustomers() {
    dispatch(() => {
      fetch(`http://localhost:3000/api/customers`)
        .then(res => res.json())
        .then(data => {
          dispatch({
            type: "CUSTOMER_DATA",
            data
          });
        });
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(App);

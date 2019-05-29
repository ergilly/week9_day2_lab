import { connect } from "react-redux";
import React, {Component} from "react";
import "./App.css";

class CustomersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      customer_id: ''
    }
    this.handleFirst = this.handleFirst.bind(this)
    this.handleSecond = this.handleSecond.bind(this)
    this.handleID = this.handleID.bind(this)
    this.newUserForm = this.newUserForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  addAccount(evt){
    let card = document.querySelector(".addCustForm");
    card.style.display = 'block'
  };

  listUsers() {
    const list = this.props.data.map(customer => {
    return (
      <div key={customer.customer_id}>
        <div>{customer.first_name}</div>
      </div>
    );
  });
  return list
  }

  newUserForm(){
    return (
      <div className="addCustForm">
        <form >
          <input type="text" placeholder='First Name' onChange={this.handleFirst}/>
          <input type="text" placeholder='Last Name' onChange={this.handleSecond}/>
          <input type="text" placeholder='Customer ID' onChange={this.handleID}/>
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  };

  handleFirst(evt){
    this.setState({
      first_name: evt.target.value
    })
  }

  handleSecond(evt){
    this.setState({
      last_name: evt.target.value
    })
  }

  handleID(evt){
    this.setState({
      customer_id: evt.target.value
    })
  }

  handleSubmit(evt){
    evt.preventDefault()
    this.props.addCustomer(this.state)
    let card = document.querySelector(".addCustForm");
    card.style.display = 'none'
  }

  render() {
    return (
      <div>
      {this.listUsers()}
      <button onClick={() => {this.addAccount()}}>Add Account</button>
      {this.newUserForm()}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addCustomer(customer) {
      dispatch({
        type: "ADD_CUSTOMER",
        customer
      });
    }
  };
};

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomersList);

import React, { Component } from 'react';
import { addCustomer } from "../store/actions/CustomerAction";
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.addCustomer = this.addCustomer.bind(this);
  }
  addCustomer = function () {
    const customer = {
      name: 'Hao',
      age: '18'
    }
    console.error('trigle addCustomer');
    this.props.addCustomer(customer);
  }
  render() {
    let customers1 = this.props.customers;
    return (
      <div>
        <div>
          Dashboard!!!!!
        <input type="button" value="Add Customer" onClick={this.addCustomer} />
        </div>
        <div>
          {this.props.customers.map(customer => {
            return (<div>{customer.name + customer.age}</div>)
          })
          }
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {customers1.map((item, key) =>
                <tr key={key}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const addPropsToState = (state) => ({
  customers: state.customers
});
const mapStateToDispatch = dispatch => ({
  addCustomer: customer => dispatch(addCustomer(customer))
});
export default connect(
  addPropsToState, mapStateToDispatch
)(Dashboard);


import React, { Component } from 'react';

class WelcomeC extends Component {
  render() {
    return (
      <div>
        <h4>Name: {this.props.name}</h4>
        <h4>Email: {this.props.email}</h4>
        <h4>Password: {this.props.password}</h4>
      </div>
    );
  }
}

export default WelcomeC;

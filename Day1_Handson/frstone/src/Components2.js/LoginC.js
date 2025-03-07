import React, { Component } from 'react'
import WelcomeC from './WelcomeC'

export default class LoginC extends Component {
  render() {
    return (
      <div>
        <WelcomeC name="Krishna" email="ramya@gmail.com" password="krishna123" />
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Studentc extends Component {
   
  render() {
    return (
      <div>
        <h3>Name:{this.props.name}</h3>
      <h3>Address:{this.props.address}</h3>
      <h3>Scores:{this.props.scores}</h3>
      </div>
    )
  }
}

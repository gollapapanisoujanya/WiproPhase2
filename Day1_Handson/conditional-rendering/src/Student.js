import React, { Component } from 'react'

export default class Student extends Component {
    state={
        name:this.props.name,
        address:this.props.address

    }
    Updated=()=>{
        alert("Registered successfully")
    }
    ChangeText=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }
  render() {
    return (
      <div>
        {/* Name:{this.props.name}
        Address:{this.props.address} */}
        Name:{this.state.name}
        Address:{this.state.address}
        <label for="txtName">Enter name</label>
        <input type="text" id="txtName" onChange={this.ChangeText}/>
        <button onClick={this.Updated}>click me</button>
      </div>
    )
  }
}

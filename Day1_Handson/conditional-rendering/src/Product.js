import React, { Component } from 'react'

export default class Product extends Component {
    constructor(){
        super()
        this.state={
            productId:1092,
            price:200
        }
    }
    componentDidMount()
    {
        console.log("componentDidMount of Product called")
    }

  render() {
    console.log("render of product called")
    return (
      <div>
        <Cart/>
      </div>
    )
  }
}

export  class Cart extends Component {
    constructor(){
        super()
        this.state={
            productname:'bag',
            Count:0
           
        }
    }
    componentDidMount()
    {
        console.log("componentDidMount of Cart called")
    }
    componentDidUpdate()
    {
         console.log("componentDidUpdate of cart called")
         
    }
    Update=()=>{
        this.setState({Count:this.state.Count+1})
    }


    render() {
        console.log("render of Cart called")
      return (
        <div>
          <h4>productname is:{this.state.productname}</h4>
          <button onClick={this.Update}>Count</button>
          <h1>Count={this.state.Count}</h1>
        </div>
      )
    }
  }

import React, { Component } from 'react'

export default class Addcon extends Component {
   state={
    num1:0,
    num2:0,
    add:0
   }
   HandleChange =(event)=>
    {
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        const sum = Number(this.state.num1) +Number(this.state.num2);
        this.setState({ add: sum });
    };

  render() {
    return (

      <div>Userform
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="txt">Enter No1</label>
            <input type='number' name="num1"  value={this.state.num1} onChange={this.HandleChange}/>
            <br/>
            <label htmlFor="txt">Enter No2</label>
            <input type='number' name="num2"  value={this.state.num2} onChange={this.HandleChange}/>
            <br/>
            <button type='submit'> Add </button>
        </form>
        <h3>Sum: {this.state.add}</h3>

        
      </div>
    )
  }
}

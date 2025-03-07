import React, { Component } from 'react'

export default class Cond1 extends Component {
    constructor(props)
    {
      super(props);
      this.state={
        isLoggedIn:true
      };
    }
    
  
  
    render() {
      let{isLoggedIn}=this.state; //destructing
      const Authorbutton=()=>{
        if(isLoggedIn){
          return <button>Logout</button>
        }
        else{
          return <button> Login </button>
        }
      }
  
      return (
        <div>
          {Authorbutton()}
        </div>
      )
    }
  }
  

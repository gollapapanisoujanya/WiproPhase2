import React from 'react'

export default function Cond2(props) {
    let{isLoggedIn}=props
    switch(isLoggedIn){
      case true:{
          return <button>Logout</button>
          break;
      }
      case false:{
          return <button>Logout</button>
          break;
      }
    }
}

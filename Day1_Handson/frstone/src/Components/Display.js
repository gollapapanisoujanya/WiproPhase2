import React,{useState} from 'react'

const Display = ({name,address}) => {
    const[state1,setstate1]=useState(name);
    const[state2,setstate2]=useState(address);
  return (
    <div>
      <input type='text' value={state1} onChange={(e)=>setstate1(e.target.value)}/>
      <input type='text' value={state2} onChange={(e)=>setstate2(e.target.value)}/>
      <h2>Updated name:{state1}</h2>
      <h2>Updated Address:{state2}</h2>

    </div>
  )
}

export default Display

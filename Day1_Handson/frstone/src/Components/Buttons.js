import React from 'react'

const Buttons = () => {
    const showMessage = (msg) => alert(msg);
  return (
    <div>
       <button onClick={() => showMessage("Hello")}>Say Hello</button>
       <button onClick={() => showMessage("Bye")}>Say Bye</button>
    </div>
  )
}

export default Buttons

import React from 'react'

export default function Welcome(props) {
  return (
    <div>
      <h4>Name:{props.name}</h4>
      <h4>Email:{props.email}</h4>
      <h4>Password:{props.password}</h4>
    </div>
  )
}

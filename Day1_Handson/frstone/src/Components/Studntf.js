import React from 'react'

export default function Studntf(props) {
  return (
    <div>
      <h3>Name:{props.name}</h3>
      <h3>Address:{props.address}</h3>
      <h3>Scores:{props.scores}</h3>
    </div>
  )
}

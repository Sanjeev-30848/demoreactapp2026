import React from 'react'
 
export default function Demo4(props)
{
  return (
    <div>
      <h3>Props Demo</h3>
      <p>a={props.a}</p>
      <p>b={props.b}</p>
      <p>text={props.text}</p>
      <p>id={props.emp.id}</p>
      <p>name={props.emp.name}</p>
      <p>gender={props.emp.gender}</p>
      <p>salary={props.emp.salary}</p>
    </div>
  )
}
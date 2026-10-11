import React, { Component } from 'react'

export default class Demo6 extends Component
{
    constructor() // this will be invoked when component renders
    {
        super()
        this.state ={"id":1, name:"ram", gender:"male", salary:23000} // object - key value pair
    }

        // arrow function syntax
    change = () => {
        this.setState({"id":2, name:"ram123", gender:"female", salary:25000})

        // we are modifying the state object
    }

  render() 
  {
    return (
      <div>
        <h3>State Object Demo</h3>

        <p>ID:{this.state.id}</p>
        <p>NAME:{this.state.name}</p>
        <p>GENDER:{this.state.gender}</p>
        <p>SALARY:{this.state.salary}</p>

            <button onClick={this.change}>Change</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
 
export default class Demo5 extends Component
{
  render() {
    return (
      <div>
          <h3>Props Demo in Class Component</h3>
   
      <p>a={this.props.a}</p>
      <p>b={this.props.b}</p>
      <p>text={this.props.text}</p>
      <p>id={this.props.emp.id}</p>
      <p>name={this.props.emp.name}</p>
      <p>gender={this.props.emp.gender}</p>
      <p>salary={this.props.emp.salary}</p>
 
      </div>
    )
  }
}
 
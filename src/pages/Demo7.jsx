import React, { Component } from 'react'
 
export default class Demo7 extends Component
{
   constructor()
   {
       super()
       this.state = {count:0}
   }
 
   increment = () => {
        this.setState({count:this.state.count+1})
   }
 
   decrement = () => {
      this.setState({count:this.state.count-1})
   }
 
  render() {
    return (
      <div>
             <h3>Counter App Demo</h3>
             <p>COUNT={this.state.count}</p>
 
             <button onClick={this.increment}>Increment</button>
             <button onClick={this.decrement}>Decrement</button>
 
 
      </div>
    )
  }
}
 
 
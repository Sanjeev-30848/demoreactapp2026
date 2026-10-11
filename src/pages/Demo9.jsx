import React, { useState } from 'react'
import './style.css'

export default function Demo9() 
{
       const [count,setCount] = useState(0)

       function increment()
       {
          setCount(count+1)
       }
       function decrement()
       {
          setCount(count-1)
       }

  return (
    <div className='counter-demo'>
         <h3>Hooks Demo 2</h3>
         <p>COUNT={count}</p>

        <button className='btn' onClick={increment}>Increment</button>
        <button className='btn' onClick={decrement}>Decrement</button>

    </div>
  )
}
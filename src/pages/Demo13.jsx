import React, { useEffect, useState } from 'react'
import './style.css'
 
export default function Demo13()
{
    const [count,setCount] = useState(0)
 
    const increment = () => {
        setCount(count+1)
    }
 
    const decrement = () => {
        setCount(count-1)
    }
 
    // CASE 1 : without dependency - runs on every render
 
    useEffect( ()  => {
        console.log("Runs every time - page re renders .....")
    }   )
    
    // CASE 2: with empty array [] - runs only once when component loads

    useEffect( ()  => {
        console.log("Runs only once on page load .....")
        // fetch("https://api.com/data")
    }, [] ) // where [] means no dependency or input
    
    // CASE 3: with dependency (count) - runs only when count changes

     useEffect( ()  => {
        console.log("Runs when count changes:", count)
    }, [count] ) // with dependency count (input)


  return (
    <div>
       <h4>Hooks Demo 6 on useEffect</h4>
       <p>Count={count}</p>
       <button className='btn' onClick={increment}>Increment</button>
       <button className='btn' onClick={decrement}>Decrement</button>
    </div>
  )
}
 
 
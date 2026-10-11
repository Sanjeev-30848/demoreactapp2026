import React, { useState } from 'react'

export default function Demo10() 
{
    const [flag,setFlag] = useState(true) // boolean

    function change() 
    {
        setFlag(!flag)   // false -> true  and true -> false

        //  !false = true and !true = false
    }

  return (
    <div>
         <h3>Hooks Demo 3</h3>
        
        {
         flag ?  <p>ENTRY</p>  :  <p>EXIT</p>
        }

        <button onClick={change}>Change</button>

    </div>
  )
}
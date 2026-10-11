import React, { useState } from 'react'

export default function Demo12() 
{
      const [text,setText] = useState("paRaDiSE")

      function uppercase()
      {
           setText(text.toUpperCase())
      }
      function lowercase()
      {
        setText(text.toLowerCase())
      }
      function reset()
      {
        setText("paRaDiSE")
      }

  return (
    <div>

          <h3>Hooks Demo 5</h3>

          <p>{text}</p>
          <p>Length={text.length}</p>

          <button onClick={uppercase}>UPPERCASE</button>
          <button onClick={lowercase}>LOWRCASE</button>
          <button onClick={reset}>RESET</button>

         
      
    </div>
  )
}
import React, { useState } from 'react'
 
import './style.css'
 
export default function Demo11()
{
   const [score,setScore] = useState(0)
 
   const zerorun = () => {
             setScore(score+0)
   }
 
   const onerun = () => {
    setScore(score+1)
   }
 
   const tworun = () => {
    setScore(score+2)
   }
 
   const fourrun = () => {
    setScore(score+4)
   }
 
   const sixrun = () => {
setScore(score+6)
   }
 
  return (
    <div className='demo'>
         <h3>Hooks Demo 4</h3>
 
         <p>SCORE={score}</p>
 
         <button onClick={zerorun} className='btn'>0 RUN</button>
         <button onClick={onerun} className='btn'>1 RUN</button>
         <button onClick={tworun} className='btn'>2 RUN</button>
         <button onClick={fourrun} className='btn'>4 RUN</button>
         <button onClick={sixrun} className='btn'>6 RUN</button>
         
 
    </div>
  )
}
 
 
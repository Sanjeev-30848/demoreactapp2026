// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
 
import Demo1 from "./pages/Demo1"
import Demo2 from "./pages/Demo2"
import Demo3 from "./pages/Demo3"
import Demo4 from "./pages/Demo4"
 
function App() {
 
          let a=10
          let txt="jfsd"
          let emp={"id":1,"name":"ram","salary":8000,"gender":"male"}
 
 
  return (
    <div>
          <h2 style={{textAlign:"center",color:"red"}}>
            <u>Sample React App</u>
          </h2>
 
        <Demo1/>
        <Demo2/>
        <Demo3/>
 
        <Demo4 a={a} b={100} text={txt} emp={emp}/>
 
    </div>
  )
}
 
export default App
 
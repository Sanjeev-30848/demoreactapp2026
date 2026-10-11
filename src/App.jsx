// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import Demo1 from "./pages/Demo1"
import Demo10 from "./pages/Demo10"
import Demo11 from "./pages/Demo11"
import Demo12 from "./pages/Demo12"
import Demo2 from "./pages/Demo2"
import Demo3 from "./pages/Demo3"
import Demo4 from "./pages/Demo4"
import Demo5 from "./pages/Demo5"
import Demo6 from "./pages/Demo6"
import Demo7 from "./pages/Demo7"
import Demo8 from "./pages/Demo8"
import Demo9 from "./pages/Demo9"

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

        <Demo5 a={a} b={100} text={txt} emp={emp}/>

        <Demo6/>

        <Demo7/>

        <Demo8/>

        <Demo9/>

        <Demo10/>

        <Demo11/>

        <Demo12/>

    </div>
  )
}

export default App
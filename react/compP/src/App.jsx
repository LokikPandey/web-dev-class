import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div id="container">
        <h1>{props.title}</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, facilis.</h3>
    </div>
    </>
  )
}

export default App

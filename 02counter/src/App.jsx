import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter] = useState(1)
 

  const addvalue = () => {
    counter = counter + 1
    setCounter(counter)
    console.log("clicked" , counter);

  }
  const removeVal = () => {
    counter = counter - 1
    if(counter < 0) {
      console.log("can not give negative valye")
      counter = 0
      setCounter(counter)
    }
    setCounter(counter)
    console.log("clicked" , counter)
  }
  return (
   <>
   <h1>chai or react</h1>
   <h2>couter value: {counter}</h2>
   <button
   onClick={addvalue}>
    Add value {counter}</button>
   <br />
   <button
   onClick={removeVal}>
    remove value {counter}</button>
   </>
  )
}

export default App

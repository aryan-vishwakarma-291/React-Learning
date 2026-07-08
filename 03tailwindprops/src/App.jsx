import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import card from './components/Card'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "aryan",
    age: 21
  }
  let arr = [1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl'>Tailwind Test</h1>
     <Card username="chaiaurcode" btnText="click Me" />
     <Card username="Aryan"   />


    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(5)

  //use cthis method to chnage in ui proces
  // [1 , 2]
  // 2 basically tells 1 that what to do
  //in js we would hav to use documentMethod

  function addNumber() {
    if(counter < 10){
    setCounter(counter+1)
    }
    else{
      alert("you have crossed 10")
    }
  }

  const removeNumber = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
    else{
      alert("you have reached 0")
    }
  }

  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={addNumber}>Increase</button>
      <button onClick={removeNumber}>Decrease</button>
    </>
  )
}

export default App

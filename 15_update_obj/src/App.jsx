import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState({year:2018 , class:7 , name:"mainak"})

  function yearChange(event)  {
    setCounter(prevYear => ({ ...prevYear , year : event.target.value}))

    // this can be done in this way also
    // setCounter({...counter , year : event.target.value})
    //this give  value ({year:2018 , class:7 , name:"mainak" , year:2025(jst fr example)})
    // since js do not support double it overpass the previous value
    // and give the same result
    // but this is the best practice
  }

  function classChange(event)  {
    setCounter(prevClass => ({...prevClass , class: event.target.value}))
  }


  return (
    <>
    <div>
      <h2>{counter.name} in the year {counter.year} reading in class {counter.class}</h2>

      <input type="number" value={counter.year} onChange={yearChange} className='border-2 border-slate-950' />
      <input type="number" value={counter.class} onChange={classChange} className='border-2 border-slate-950' />
    </div>
    </>
  )
}

export default App

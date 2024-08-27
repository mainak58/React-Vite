import React, { useState } from 'react'

function AboutPage() {

    const [input , setInput] = useState("")
    const [value , addValue] = useState([])

    function handleInput(e){
        const recivedValue =  e.target.value
        setInput(recivedValue)
    }

    function addInput(){
        addValue(prevValue =>[...prevValue , input])
        setInput("")
    }

    function removeInput(index){
        addValue(prevValue => prevValue.filter((_ , i) => i !== index))
    }

  return (
    <>
    <h2>This is an todo app</h2>

    <div>
        <div>
        <input type="text" placeholder='put value here' onChange={handleInput} value={input}/>
        <button onClick={addInput}>Add</button>
        </div>
        <div>
        <ul>
            {value.map((pass , index) => (
                <li key={index} value={pass}>{pass}
                <button onClick={() => removeInput(index)}>Remove</button></li>
            ))}
        </ul>
        </div>
    </div>
    </>
  )
}

export default AboutPage




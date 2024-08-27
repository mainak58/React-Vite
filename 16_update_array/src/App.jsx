import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [fruits, setFruits] = useState(["apple", "banana", "mango", "salad"])

  function handleAddFood() {

    const newFruit = document.getElementById('fruitInput').value
    document.getElementById('fruitInput').value = ""

    setFruits(prevFruits => [...prevFruits, newFruit])
  }

  function handleRemoveFood(index) {

    // setFruits(fruits.filter((_ , i) => i !==index))
    setFruits(prevFruits => prevFruits.filter((_, i) => i !== index));
  }

  return (
    <>
      <div>
        <h2>Fruits</h2>
        <ul>
          {fruits.map((fruit, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{fruit}</li>)}
        </ul>
        <input type="text" id='fruitInput' />
        <button onClick={handleAddFood}>Add Fruit</button>
      </div>
    </>
  )
}

export default App

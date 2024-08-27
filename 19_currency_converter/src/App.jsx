import { useState } from 'react'
import Info from './Component/Info'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Info />
    </>
  )
}

export default App

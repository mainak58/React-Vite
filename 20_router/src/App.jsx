import './App.css'
import { Route, Routes , Link } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'

function App() {

  return (
    <>

      <nav> 
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Hello</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

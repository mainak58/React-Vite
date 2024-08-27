import React from 'react'
import { Link , Routes , Route } from 'react-router-dom'
import About from '../Pages/About'
import './header.module.css'


function Header() {
  return (
    <>
    <nav className='bg-amber-600 p-3'>
        <ul className='flex justify-evenly '>
            <Link to= '/'><li>Home</li></Link>
            <Link to= '/about'><li>About</li></Link>
        </ul>
    </nav>

    <Routes>
        <Route path='/about' element={<About />}/>
    </Routes>

    </>

  )
}

export default Header
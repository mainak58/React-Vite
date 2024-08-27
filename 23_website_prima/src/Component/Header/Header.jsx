import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import AboutPage from '../../Pages/AboutPage'
import ProfileSection from '../../Pages/Profile'

function Header() {
    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/about'>About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" aria-disabled="true">Login</Link>
                </li>
            </ul>

            <Routes>
                <Route path='/about' element={<AboutPage />} />
                <Route path='/profile' element={<ProfileSection />} />
            </Routes>

        </div>
    )
}

export default Header
import React, { useState , useContext } from 'react'
import UserContext from '../userContext/UserContext'

function Login() {

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    function handelSubmit(e){
        e.preventDefault()
        setUser({userName , password})
    }

    return (
        <>
            <h2>Login</h2>
            <input type='text'
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='give a name' />
            <input type='text'
                value={userName}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='give a name' />
            <button onClick={handelSubmit}>Submit</button>
        </>
    )
}

export default Login
import UserContextProvider from './userContext/UserContextProvider,'
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  
  return (
    <UserContextProvider>
      <h1>Hello Mainak</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

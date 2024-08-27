import { useState, useCallback, useEffect ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  // default value set to 8 
  // so its start from 88

  const [numberAllowed, setNumberAllowed] = useState(false)
  // default value set to false

  const [charAllowed, setCharAllowed] = useState(false)
  //default value set to false

  const [password, setPassword] = useState("")

  //use ref hook

  const passwordRef = useRef(null)



  // callback function: when to change a function
  // usercallbak a function rerenders a function untll its dependies changes
  // this change is depends upon some factor
  // those are called dependecies
  //dependies are some kind of array
  //const cachedFn = useCallback(fn, dependencies)
  // dependencies are soe lind of array []

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    // if numberallowed turned true then
    // we add this value

    if (charAllowed) str += "!@#$%^&*"


    for (let i = 1; i < length; i++) {
      //use length
      // so we know that the user value user selected or the password user want to generate
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed , setPassword])


  //for ref hook

  const copyPassword = useCallback (()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  } , [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly 
            ref={passwordRef}/>
          <button onClick={copyPassword} className='m-4 text-white'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />

            <label> Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={(e) => {

                setNumberAllowed((prev) => !prev)
                // use this prev just to switch true false
                // we can not do this setNumberAllowed(true)
                //then we can only transfer this to true at one time

              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charValue'
              onChange={(e) => {
                setCharAllowed((prev) => !prev)

              }}
            />
            <label htmlFor="charValue">Character</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App


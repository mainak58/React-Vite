import { useState } from "react"

function App() {

  const [color , setColor] = useState("black")
  // setting default to black

  function redColor(){
    setColor("red")
  }

  // or if want to use arrow function

  // const redColor = () => {
  //   return setColor("red")
  // }
    return (
    <>

        <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
          {/* background color set to the color function or its default function in above */}
          {/* here the default value of color is black */}


          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0" >
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-lg">

              <button onClick={redColor}
              // another way to do it is
              // onClick={() => setColor("red")}
              className="outline-none px-4 rounded-lg text-white" style={{backgroundColor: 'red'}}>Red</button>
              <button className="outline-none px-4 rounded-lg text-white" style={{backgroundColor: 'green'}} >Green</button>
              <button className="outline-none px-4 rounded-lg text-white" style={{backgroundColor: 'blue'}} >Blue</button>
            </div>
          </div>
        </div>

    </>
  )
}

export default App

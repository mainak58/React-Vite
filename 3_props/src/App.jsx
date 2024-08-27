import Student from "./student"
import "./index.css"

function App() {
  return (
    <>
      <Student name="Mainak" age={30} isStudent={true} />
      <Student name="Hello" age={25} isStudent={false} />
      <Student name="hey" age={20}  isStudent={true} />
      <Student />
    </>
  )
}

export default App

import Heading from "./Component/Heading"
import Preface from "./Component/Preface";
import Time from "./Component/Time";
import "bootstrap/dist/css/bootstrap.min.css"
import "./app.css"

function App() {

  return (
    <>
      <div className="time-container">
        <Heading />
        <Preface />
        <Time />
      </div>
    </>
  );

}

export default App

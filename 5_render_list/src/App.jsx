import List from "./assets/list"


function App() {
  
  const fruits = [{
    id:1,
    name: "apple",
    calories: 45
}, {
    id:2,
    name: "banana",
    calories: 55
}, {
    id:3,
    name: "orange",
    calories: 85
}, {
    id:4,
    name: "mango",
    calories: 44
}, {
    id:5,
    name: "pineapple",
    calories: 88
}]

  return (
    <>
        <List items={fruits} catagory="Fruits"/>
    </>
  )
}

export default App

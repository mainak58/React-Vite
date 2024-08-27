import { useState } from 'react'

function App() {

  const countries = [
    {
      name: 'India', value: 'IN', cities: [
        'Delhi',
        'Mumbai'
      ]
    },
    {
      name: 'Pakistan', value: 'PK', cities: [
        'Lahore',
        'Karachie'
      ]
    },
    {
      name: 'Bangladesh', value: 'BN', cities: [
        'Dhaka',
        'Silet'
      ]
    },
  ]


  const [name, setName] = useState('')
  const [cities, setCities] = useState([])


  function handleName(e) {
    const clickName = e.target.value
    setName(clickName)
  

 

    countries.forEach((country) => {
      if(country.name === clickName){
        setCities(country.cities)
      }
    })

  }

  return (
    <>
      <h1>Country Selector</h1>
      <div className='flex justify-center align-bottom'>
        <select onChange={handleName}>
          {countries.map((country) => (<option key={country.value} value={country.name}>{country.name}</option>))}
        </select>
        <select>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
    </>
  )
}

export default App

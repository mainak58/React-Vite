import React , {useEffect , useState} from 'react'

function UseCurrencyinfo(currency) {

    const [data , setData] = useState({})

    useEffect (() => {
        // 1st step
        // useeffect

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        //fetch the url and using then

        .then((res) => res.json())
        //using then 
        //first of all we need to change all the data in json format
        //storing all the data

        .then((res) => setData(res[currency]) )
        // now the curency name we ghave given 
        // we ned to access the data of urrency
        //  the way we use data in side objectis 
        // by using.(dot) method
        // we can d this also by using [] also
        // we can to transfer data directly so need to build or use useState method
        //and in the responce we transfer the data
        console.log(data)
    } , [currency])


  return (
    data
  )
}

export default UseCurrencyinfo
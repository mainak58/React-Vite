import React, { useEffect, useState } from 'react'

export default function DigitalClock() {

    const [time , setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () =>{
            clearInterval(intervalId)
        }
    } , [])

    function theTime(){
        let hour = time.getHours()
        let seconds = time.getSeconds()
        let minuts = time.getMinutes()

        return `${hour} : ${minuts} : ${seconds}`
    }


  return (
        <div className='clock-container'>
            <div className='clock'>
                <span>{theTime()}</span>
            </div>
        </div>
  )
}

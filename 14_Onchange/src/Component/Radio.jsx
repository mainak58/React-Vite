import React, { useState } from 'react'

export default function Radio() {

    const [shipping , setShipping] = useState("")

    function handleShipping(event){
        setShipping(event.target.value)
    }

  return (
    <div>
         <label>
                <input
                    type="radio"
                    value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShipping}
                />
                Pick Up
            </label>
         <label>
                <input
                    type="radio"
                    value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShipping}
                />
                Delivery
            </label>

            <p>Shipping : {shipping}</p>
    </div>
  )
}

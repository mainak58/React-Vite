import React, { useState } from 'react'


function Select(){

    const [payment , setPayment] = useState("None")

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    return(

        <>
        <select value={payment} onChange={handlePaymentChange}
            className='border-solid border-2 border-sky-500'>
            <option value="">Select an option</option>
            <option value="VISA">VISA</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Gift Card">Gift Card</option>
        </select>

        <p> Payment: {payment}</p>
        </>
    );
}

export default Select
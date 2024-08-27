import React , {useState} from "react";


function NameNumber() {

    const [value, setValue] = useState("Guest");
    const [quantity, setQuantity] = useState("")


    //for text
    function handleChange(e) {
        setValue(e.target.value)
    }


    // for number

    function forNumber(e) {
        setQuantity(e.target.value)
    }

    // we are accesing the value inside it


    return (
        <div>
            <input
                value={value} onChange={handleChange}
                />
            <h2>the text is: {value}</h2>

            <input
                value={quantity} onChange={forNumber}
                className="border-solid border-2 border-black-800 "
                type="number" />

            <h2>The number is : {quantity}</h2>

        </div>
    );
}

export default NameNumber
import { useState } from "react"


export default function Method2() {

    const [add, setAdd] = useState([])



    function addValue() {
        const inputBox = document.getElementById('inputBox').value
        document.getElementById('inputBox').value = ""
        setAdd(prevAdd => [...prevAdd, inputBox])
        // setAdd(prevAdd => [...prevAdd, inputBox])
    }

    function removeAdd(index) {
        setAdd(prevAdd => prevAdd.filter((_, i) => i !== index))
    }
    return (
        <>
            <div>
                <input type="text" id='inputBox' placeholder="Method2" />
                <button onClick={addValue}>Add</button>
            </div>

            <ul>
                {add.map((addValue, index) => <li key={index}>{addValue}
                    <button onClick={() => removeAdd(index)}>Remove</button>
                </li>)}
            </ul>

        </>
    )
}

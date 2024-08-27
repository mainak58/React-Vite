import { useState } from "react"

export default function Method1() {
    const [item, setItem] = useState('')
    const [add, setAdd] = useState([])


    function inputItem(event) {
        setItem(event.target.value)
    }


    function addItem() {
        setAdd([...add, item])
        // everything comes into add
        //now we need to use map to pu all the value inside
        setItem("")
    }

    //setting up a function to remove value
    const removeValue = (index) => {
        setAdd(prevItem => prevItem.filter((_, i) => i !== index))
    }

    return (
        <>
            <div>
                <input type="text" value={item} placeholder='Method1' onChange={inputItem} />
                <button onClick={addItem}>Add</button>
            </div>
            <ul>
                {add.map((item, index) => (
                    <li key={index}>{item}
                        <button onClick={() => removeValue(index)}>Remove</button></li>
                ))}

            </ul>

        </>
    )
}

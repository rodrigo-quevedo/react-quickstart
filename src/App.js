import {useState} from 'react';

export default function Board() {
    return (
    <div className="boardContainer">
        <Square />
        <Square />
        <Square />
       
        <Square />
        <Square />
        <Square />
       
        <Square />
        <Square />
        <Square />
    </div>
)   
}

function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue("X")
        }

    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    )
}


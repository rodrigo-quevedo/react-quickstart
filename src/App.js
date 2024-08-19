import {useState} from 'react';

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleClick(i) {
        let nextSquares = [...squares]
        nextSquares[i] = "X"
        setSquares(nextSquares)
    }

    return (
    <div className="boardContainer">
        <Square value={squares[0]} onClickProp={()=> {handleClick(0)}}/>
        <Square value={squares[1]} onClickProp={()=> {handleClick(1)}}/>
        <Square value={squares[2]} onClickProp={()=> {handleClick(2)}}/>
       
        <Square value={squares[3]} onClickProp={()=> {handleClick(3)}}/>
        <Square value={squares[4]} onClickProp={()=> {handleClick(4)}}/>
        <Square value={squares[5]} onClickProp={()=> {handleClick(5)}}/>
       
        <Square value={squares[6]} onClickProp={()=> {handleClick(6)}}/>
        <Square value={squares[7]} onClickProp={()=> {handleClick(7)}}/>
        <Square value={squares[8]} onClickProp={()=> {handleClick(8)}}/>
    </div>
)   
}

function Square({value, onClickProp}) {
    return (
        <button className="square" onClick={onClickProp}>
            {value}
        </button>
    )
}


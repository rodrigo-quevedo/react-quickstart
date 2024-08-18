import {useState} from 'react';

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handlePlay(value) {
        let player = "X"
        console.log('in board')
        executePlay(value, player)
    }
    function executePlay(value, player) {
        console.log('ok')
        let nextSquares = [...squares];
        nextSquares[value] = player;
        setSquares(nextSquares)
    }

    return (
    <div className="boardContainer">
        <Square value={0} handlePlayProp={handlePlay} squares={squares}/>
        <Square value={1} handlePlayProp={handlePlay} squares={squares}/>
        <Square value={2} handlePlayProp={handlePlay} squares={squares}/>
       
        <Square value={3} handlePlayProp={handlePlay} squares={squares}/>
        <Square value={4} handlePlayProp={handlePlay} squares={squares}/>
        <Square value={5} handlePlayProp={handlePlay} squares={squares}/>
       
        <Square value={6} handlePlayProp={handlePlay} squares={squares}/>
        <Square value={7} handlePlayProp={handlePlay} squares={squares}/>
        <Square value={8} handlePlayProp={handlePlay} squares={squares}/>
    </div>
)   
}

function Square({value, handlePlayProp, squares}) {
    function handleClick() {
        console.log('in square')
        handlePlayProp(value)
    }

    return (
        <button className="square" onClick={handleClick}>
            {squares[value]}
        </button>
    )
}


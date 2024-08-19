import {useState} from 'react';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [xIsNext, setXIsNext] = useState(true)
    const squares = history[history.length - 1]

    function handlePlay(nextSquares) {
        let nextHistory = [...history, nextSquares]
        setHistory(nextHistory)
        setXIsNext(!xIsNext)
        console.log(history)
    }

    return (
        <div className="game">
            <Board squares={squares} xIsNext={xIsNext} onPlay={handlePlay}/>
            <div className="game-info">
                <ol>

                </ol>
            </div>
        </div>
    )
}

function Board({squares, xIsNext, onPlay}) {

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return

        let nextSquares = [...squares]

        if (xIsNext) nextSquares[i] = "X"
        else nextSquares[i] = "O"

        onPlay(nextSquares)
    }

    let text;
    if (calculateWinner(squares)){
        text = `Winner is ${calculateWinner(squares)}`
    }
    else {
        text = `Next player is: ${xIsNext ? 'X' : 'O'}`
    }

    return (
        <div>
            <div className="status">{text}</div>
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

function calculateWinner(squares) {
    let winningLines = [
        [0,1,2], 
        [3,4,5], 
        [6,7,8],
        
        [0,
         3,
         6],
        
        [1,
         4,
         7],

        [2,
         5,
         8],

        [0,
           4,
             8],

        [   2,
          4,
        6]
    ]

    for (let i = 0; i < winningLines.length ; i++) {
        // desestructuración equivalente a: [ winningLines[0], winningLines[1], winningLines[2] ]
        let [a,b,c] = winningLines[i]

        if (squares[a] === 'X' && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
        
        if (squares[a] === 'O' && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
    }
    return null

}

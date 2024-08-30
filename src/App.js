import {useState} from 'react';

import Board from './Board'

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentTurn, setCurrentTurn] = useState(0)

    // const [xIsNext, setXIsNext] = useState(true)
    const xIsNext = currentTurn % 2 === 0 ? true : false;
    
    // const squares = history[history.length - 1]
    const squares = history[currentTurn]


    function handlePlay(nextSquares) {
        let nextHistory = [...history.slice(0, currentTurn + 1), nextSquares]
        setHistory(nextHistory)
        // setXIsNext(!xIsNext)
        console.log(history)

        setCurrentTurn(currentTurn + 1)
    }

    const moves = history.map((element, index)=>{
        if (index > currentTurn) return;
        return (
            <li key={index}>
                <button onClick={()=> {setCurrentTurn(index)}}>
                    {`Go to move ${index}`}
                </button>
            </li>
        )
    })

    return (
        <div className="game">
            <Board squares={squares} xIsNext={xIsNext} onPlay={handlePlay}/>
            <div className="game-info">
                <ol className="movesList">
                    <div className="movesText">History of moves</div>
                    {moves}
                </ol>
            </div>
        </div>
    )
}



export function Square({value, onClickProp}) {
    return (
        <button className="square" onClick={onClickProp}>
            {value}
        </button>
    )
}

export function calculateWinner(squares) {
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

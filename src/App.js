import {useState} from 'react';

import Board from './Board'

//Add a toggle button that lets you sort the moves in either ascending or descending order.
function MoveOrderButton({ascending, setAscending}) {
    return (
        <button className="toggleAscendingButton" onClick={() => {setAscending(!ascending)} }>
            {ascending ? `Set to DESCENDING order` : `Set to ASCENDING order`}
        </button>
    )
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentTurn, setCurrentTurn] = useState(0)

    // const [xIsNext, setXIsNext] = useState(true)
    const xIsNext = currentTurn % 2 === 0 ? true : false;
    
    // const squares = history[history.length - 1]
    const squares = history[currentTurn]


    const [ascending, setAscending] = useState(false)

    function handlePlay(nextSquares) {
        let nextHistory = [...history.slice(0, currentTurn + 1), nextSquares]
        setHistory(nextHistory)
        // setXIsNext(!xIsNext)
        // console.log(history)

        setCurrentTurn(currentTurn + 1)
    }

    const moves = history.map((element, index)=>{
        if (index > currentTurn) return;
        return (
            //For the current move only, show “You are at move #…” instead of a button.
            index === currentTurn ? 
            <li key={index}>
                {`You are at move #${index}`}
            </li>
            :
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
                <div>
                    <ol className="movesList">        
                        <div className="movesText">History of moves</div>
                        {ascending ? moves.reverse() : moves}
                    </ol>   
                </div>
                <MoveOrderButton
                ascending={ascending}
                setAscending={setAscending}
                />
            </div>
        </div>
    )
}



export function Square({value, onClickProp, highlight}) {
    return (
        <button className={highlight? "square highlight": "square"} onClick={onClickProp}>
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

        if (squares[a] === 'X' && squares[a] === squares[b] && squares[a] === squares[c]) return {
            winner: squares[a],
            positions: [a,b,c]        
        }
        
        if (squares[a] === 'O' && squares[a] === squares[b] && squares[a] === squares[c]) return {
            winner: squares[a],
            positions: [a,b,c]        
        }
    }
    return null

}

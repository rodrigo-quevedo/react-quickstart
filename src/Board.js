import {Square, calculateWinner} from './App'


export default function Board({squares, xIsNext, onPlay}) {

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

    //Rewrite Board to use two loops to make the squares instead of hardcoding them.
    const listOfSquares = new Array(9).fill(null).map((el, index)=> {
        return (
            <Square key={index} value={squares[index]} onClickProp={()=>{handleClick(index)}}/>
        ) 
    })


    return (
        <div>
            <div className="status">{text}</div>
            <div className="boardContainer">
                {listOfSquares}
            </div>
        </div>
    )   
}

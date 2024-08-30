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

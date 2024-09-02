import { useState } from 'react'

import {Square, calculateWinner} from './App'


export default function Board({squares, xIsNext, onPlay}) {
  
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)?.winner) return

        let nextSquares = [...squares]

        if (xIsNext) nextSquares[i] = "X"
        else nextSquares[i] = "O"

        onPlay(nextSquares)
    }

    let text;
    if (calculateWinner(squares)?.winner){
        text = `Winner is ${calculateWinner(squares)?.winner}`
    }
    else {
        text = `Next player is: ${xIsNext ? 'X' : 'O'}`
    }

    //when no one wins, display a message about the result being a draw
    let draw = true;
    for (let square of squares) {
        if (square === null) draw = false 
    }
    text = draw ? <p className="draw-text">IT'S A DRAW!</p> : text

    //Rewrite Board to use two loops to make the squares instead of hardcoding them.
    const listOfSquares = new Array(9).fill(null).map((el, index)=> {
        if (calculateWinner(squares)?.winner) {
            let [a,b,c] = calculateWinner(squares).positions

            if (index === a || index === b || index === c) {
                return (
                    <Square highlight={true} key={index} value={squares[index]} onClickProp={()=>{handleClick(index)}}/>
                ) 
            }
        }

        return (
            <Square highlight={false} key={index} value={squares[index]} onClickProp={()=>{handleClick(index)}}/>
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

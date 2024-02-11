import Square from "./Square";
import "./GameBoard.css"
export default function GameBoard({board}) {
  return (
    <div id="gameBoardContainer">
    {board.map((value, idx) => {
      return <Square key={idx} number={value}/>
    })}
    </div>
  );
}

import Square from "./Square";
import "./GameBoard.css";
export default function GameBoard({ board, isGameOver, reset}) {
  //jsx rendering of each square and conditional game over
  return (
    <div id="gameBoardContainer">
      {board.map((value, idx) => {
        return <Square key={idx} number={value}  />;
      })}
      {isGameOver ? (
        <div id="gameDiv">
          <p id="over">Game Over!</p>
          <button onClick={reset}>Try Again</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

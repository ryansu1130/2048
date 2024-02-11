import { useState } from "react";
import "./App.css";
import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";

function App() {
  const generateNum = () => {
    if (Math.random() > 0.5) {
      return 2;
    }
    return 4;
  };

  const generateSpot = () => {
    let randomSpot = Math.floor(Math.random() * 16);
    if (board[randomSpot] === null) {
      console.log(randomSpot, "is null");
      let copy = [...board];
      copy[randomSpot] = generateNum();
      setBoard(copy);
      console.log(board);
    } else {
      generateSpot();
      }
    }
  ;

  const initBoard = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    generateNum(),
    null,
    generateNum(),
  ];
  const [board, setBoard] = useState(initBoard);
  return (
    <>
      <div id="mainContainer" onClick={generateSpot}>
        <ScoreBoard reset={setBoard} />
        <GameBoard board={board} />
      </div>
    </>
  );
}

export default App;

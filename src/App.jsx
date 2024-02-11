import { useState } from "react";
import "./App.css";
import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";
function App() {
  return (
    <>
      <div id="mainContainer">
        <ScoreBoard />
        <GameBoard />
      </div>
    </>
  );
}

export default App;

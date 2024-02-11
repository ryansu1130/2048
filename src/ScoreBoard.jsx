import "./ScoreBoard.css";
import GameControl from "./GameControl";
export default function ScoreBoard() {
  return (
    <>
      <div id="scoreBoardContainer">
        <h1>2048+</h1>
        <button>
          Score <p>512</p>
        </button>
        <button>
          Best <p>2048</p>
        </button>
        <GameControl />
      </div>
    </>
  );
}

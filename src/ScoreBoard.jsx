import "./ScoreBoard.css";
import GameControl from "./GameControl";
export default function ScoreBoard({ reset, score }) {
  let total = 0;
  const totalScore = () => {
    score.map((value, idx) => {
      if(value >= total){
        total = value;
      }
    });
  };
  totalScore();

  return (
    <>
      <div id="scoreBoardContainer">
        <h1>2048+</h1>
        <button>
          Score <p>{total}</p>
        </button>
        <button>
          Best <p>{total}</p>
        </button>
        <GameControl reset={reset} />
      </div>
    </>
  );
}

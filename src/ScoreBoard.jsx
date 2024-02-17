import "./ScoreBoard.css";
import { useState } from "react";
import { useEffect } from "react";
import GameControl from "./GameControl";
export default function ScoreBoard({ reset, score }) {

  let runningTotal = 0
  let best = localStorage.getItem("best")
  const [total, setTotal] = useState(0)
  const onReset = () =>{
    setTotal(0)
  }

  useEffect(() => {
    score.map((value, idx) => {
      runningTotal += value
    });
    setTotal(runningTotal);
  }, [total,score])

  useEffect(() => {
    if(total >= best)
    {
      localStorage.setItem("best", total)
    }
  },[total])
    
  return (
    <>
      <div id="scoreBoardContainer">
        <h1>2048+</h1>
        <button>
          Score <p>{total}</p>
        </button>
        <button>
          Best <p>{best}</p>
        </button>
        <GameControl reset={reset} onReset={onReset} />
      </div>
    </>
  );
}
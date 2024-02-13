import { useState } from "react";
import { useEffect } from "react";
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
    2,
    2,
    4,
  ];
  const [board, setBoard] = useState(initBoard);
  useEffect(() => {
    function handleKeyDown(e) {
      // console.log(e.keyCode);
      handleMove(e.keyCode);
    }

    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [board]);

  const noBoxNull = (num1, num2, num3, num4) => {
    let copy = board
    if(board[num1] !== null && board[num2] !== null && board[num3] !== null && board[num4] !== null)
    {
      if(board[num1] === board[num2] && board[num3] === board[num4] )
      {
        // 2,2,2,2
        copy[num1] = board[num1] + board[num2];
        copy[num2] = board[num3] + board[num4];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy)
      }
      else if(board[num3] === board[num4] && board[num4] === board[num2] )
      {
        //8,4,4,4
        copy[num2] = board[num2] + board[num3]
        copy[num3] = board[num4]
        copy[num4] = null;
        setBoard(copy)
      }
      else if(board[num3] === board[num4] && board[num1] !== board[num2])
      {
        //8,4,2,2
        copy[num3] = board[num3] + board[num4]
        copy[num4] = null;
        setBoard(copy)
      }
      else if(board[num1] === board[num2] && board[num3] !== board[num4]){
        // 2,2,2,4
        copy[num1] = board[num1] + board[num2];
        copy[num2] = board[num3]
        copy[num3] = board[num4]
        copy[num4] = null;
        setBoard(copy)
      }
      else if(board[num2] === board[num3]){
        // 4,2,2,4
        copy[num2] = board[num2] + board[num3]
        copy[num3] = board[num4]
        copy[num4] = null;
        setBoard(copy)
      }
      
    }
  }

  const firstBoxNull = (num1, num2, num3, num4) =>{
    if(board[num1] === null && board[num2] !== null && board[num3] !== null && board[num4] !== null)
      {
        let copy = board
        if(board[num2] === board[num3])
        {
          copy[num1] = board[num2] + board[num3]
          copy[num2] = board[num4]
          copy[num3] = null
          copy[num4] = null
          setBoard(copy)
        }
        else if (board[num2] !== board[num3] && board[num3] !== board[num4]){
          copy[num1] = board[num2]
          copy[num2] = board[num3]
          copy[num3] = board[num4]
          copy[num4] = null
          setBoard(copy)
        }
        else if (board[num3] === board[num4] && board[num2] !== board[num3]){
          copy[num1] = board[num2]
          copy[num2] = board[num3] + board[num4]
          copy[num3] = null
          copy[num4] = null
          setBoard(copy)
        }
      }
  }

  const secondBoxNull = (num1, num2, num3, num4) =>{
    if(board[num1] !== null && board[num2] === null && board[num3] !== null && board[num4] !== null)
      {
        let copy = board
        if(board[num1] === board[num3])
        {
          copy[num1] = board[num1] + board[num3]
          copy[num2] = board[num4]
          copy[num3] = null
          copy[num4] = null
          setBoard(copy)
        }
        else if (board[num1] !== board[num3]){
          copy[num2] = board[num3]
          copy[num3] = board[num4]
          copy[num4] = null
          setBoard(copy)
        }
      }
  }

  const thirdBoxNull = (num1, num2, num3, num4) =>{
    if(board[num1] !== null && board[num2] !== null && board[num3] === null && board[num4] !== null)
      {
        let copy = board
        if(board[num1] === board[num2])
        {
          copy[num1] = board[num1] + board[num2]
          copy[num2] = board[num4]
          copy[num3] = null
          copy[num4] = null
          setBoard(copy)
        }
        else if (board[num1] !== board[num2] && board[num2] !== board[num4]){
          copy[num3] = board[num4]
          copy[num4] = null
          setBoard(copy)
        }
        else if (board[num2] === board[num4]){
          copy[num2] = board[num2] + board[num4]
          copy[num3] = null
          copy[num4] = null
          setBoard(copy)
        }
      }
  }

  const forthBoxNull = (num1, num2, num3, num4) =>{
    if(board[num1] !== null && board[num2] !== null && board[num3] !== null && board[num4] === null)
    {
      let copy = board
      if(board[num1] === board[num2])
      {
        copy[num1] = board[num1] + board[num2]
        copy[num2] = board[num3]
        copy[num3] = null
        copy[num4] = null
        setBoard(copy)
      }
      else if (board[num1] !== board[num2] && board[num2] !== board[num3]){
        setBoard(copy)
      }
      else if (board[num2] === board[num3]){
        copy[num2] = board[num2] + board[num3]
        copy[num3] = null
        copy[num4] = null
        setBoard(copy)
      }
    }
  }

  const handleMove = (key) => {
    
    if (key === 37 || key === 65) {
      noBoxNull(0,1,2,3)
      noBoxNull(4,5,6,7)
      noBoxNull(8,9,10,11)
      noBoxNull(12,13,14,15)
      firstBoxNull(0,1,2,3)
      firstBoxNull(4,5,6,7)
      firstBoxNull(8,9,10,11)
      firstBoxNull(12,13,14,15)
      secondBoxNull(0,1,2,3)
      secondBoxNull(4,5,6,7)
      secondBoxNull(8,9,10,11)
      secondBoxNull(12,13,14,15)
      thirdBoxNull(0,1,2,3)
      thirdBoxNull(4,5,6,7)
      thirdBoxNull(8,9,10,11)
      thirdBoxNull(12,13,14,15)
      forthBoxNull(0,1,2,3)
      forthBoxNull(4,5,6,7)
      forthBoxNull(8,9,10,11)
      forthBoxNull(12,13,14,15)
      // console.log("left");
      generateSpot();
    } else if (key === 38 || key === 87) {
      noBoxNull(0,4,8,12)
      noBoxNull(1,5,9,13)
      noBoxNull(2,6,10,14)
      noBoxNull(3,7,11,15)
      firstBoxNull(0,4,8,12)
      firstBoxNull(1,5,9,13)
      firstBoxNull(2,6,10,14)
      firstBoxNull(3,7,11,15)
      secondBoxNull(0,4,8,12)
      secondBoxNull(1,5,9,13)
      secondBoxNull(2,6,10,14)
      secondBoxNull(3,7,11,15)
      thirdBoxNull(0,4,8,12)
      thirdBoxNull(1,5,9,13)
      thirdBoxNull(2,6,10,14)
      thirdBoxNull(3,7,11,15)
      forthBoxNull(0,4,8,12)
      forthBoxNull(1,5,9,13)
      forthBoxNull(2,6,10,14)
      forthBoxNull(3,7,11,15)
      generateSpot();
      // console.log("up");
    } else if (key === 39 || key === 68) {
      noBoxNull(3,2,1,0)
      noBoxNull(7,6,5,4)
      noBoxNull(11,10,9,8)
      noBoxNull(15,14,13,12)
      firstBoxNull(3,2,1,0)
      firstBoxNull(7,6,5,4)
      firstBoxNull(11,10,9,8)
      firstBoxNull(15,14,13,12)
      secondBoxNull(3,2,1,0)
      secondBoxNull(7,6,5,4)
      secondBoxNull(11,10,9,8)
      secondBoxNull(15,14,13,12)
      thirdBoxNull(3,2,1,0)
      thirdBoxNull(7,6,5,4)
      thirdBoxNull(11,10,9,8)
      thirdBoxNull(15,14,13,12)
      forthBoxNull(3,2,1,0)
      forthBoxNull(7,6,5,4)
      forthBoxNull(11,10,9,8)
      forthBoxNull(15,14,13,12)
      generateSpot();
      // console.log("right");
    } else if (key === 40 || key === 83) {
      noBoxNull(12,8,4,0)
      noBoxNull(13,9,5,1)
      noBoxNull(14,10,6,2)
      noBoxNull(15,11,7,3)
      firstBoxNull(12,8,4,0)
      firstBoxNull(13,9,5,1)
      firstBoxNull(14,10,6,2)
      firstBoxNull(15,11,7,3)
      secondBoxNull(12,8,4,0)
      secondBoxNull(13,9,5,1)
      secondBoxNull(14,10,6,2)
      secondBoxNull(15,11,7,3)
      thirdBoxNull(12,8,4,0)
      thirdBoxNull(13,9,5,1)
      thirdBoxNull(14,10,6,2)
      thirdBoxNull(15,11,7,3)
      forthBoxNull(12,8,4,0)
      forthBoxNull(13,9,5,1)
      forthBoxNull(14,10,6,2)
      forthBoxNull(15,11,7,3)
      generateSpot();
      // console.log("down");

    } else {
      return false;
    }
  };

  const generateSpot = () => {
    let randomSpot = Math.floor(Math.random() * 16);
    if (board[randomSpot] === null) {
      // console.log(randomSpot, "is null");
      let copy = [...board];
      copy[randomSpot] = generateNum();
      setBoard(copy);
      // console.log(board);
    } else {
      generateSpot();
    }
  };

  const handleReset = (e) => {
    // e.stopPropagation();
    setBoard(initBoard);
  };

  return (
    <>
      {/* <button onClick={handleReset}>Reset</button>
      <button onClick={generateSpot}>New</button> */}
      <div id="mainContainer">
        <ScoreBoard reset={handleReset} score={board} />
        <GameBoard board={board} />
      </div>
    </>
  );
}

export default App;

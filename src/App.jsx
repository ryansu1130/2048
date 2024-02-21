import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";

function App() {

  //select between 2 or 4
  const generateNum = () => {
    if (Math.random() > 0.5) {
      return 2;
    }
    return 4;
  };

  //init board
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
  const [isGameOver, setIsGameOver] = useState(false);

  //The board changes
  useEffect(() => {
    function handleKeyDown(e) {
      handleMove(e.keyCode);
    }

    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [board]);

  //game logic
  const noBoxNull = (num1, num2, num3, num4) => {
    let copy = board;
    if (
      board[num1] !== null &&
      board[num2] !== null &&
      board[num3] !== null &&
      board[num4] !== null
    ) {
      if (board[num1] === board[num2] && board[num3] === board[num4]) {
        copy[num1] = board[num1] + board[num2];
        copy[num2] = board[num3] + board[num4];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num3] === board[num4] && board[num4] === board[num2]) {
        copy[num2] = board[num2] + board[num3];
        copy[num3] = board[num4];
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num3] === board[num4] && board[num1] !== board[num2]) {
        copy[num3] = board[num3] + board[num4];
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num1] === board[num2] && board[num3] !== board[num4]) {
        copy[num1] = board[num1] + board[num2];
        copy[num2] = board[num3];
        copy[num3] = board[num4];
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num2] === board[num3]) {
        copy[num2] = board[num2] + board[num3];
        copy[num3] = board[num4];
        copy[num4] = null;
        setBoard(copy);
      }
    }
  };

  //game logic
  const firstBoxNull = (num1, num2, num3, num4) => {
    if (
      board[num1] === null &&
      board[num2] !== null &&
      board[num3] !== null &&
      board[num4] !== null
    ) {
      let copy = board;
      if (board[num2] === board[num3]) {
        copy[num1] = board[num2] + board[num3];
        copy[num2] = board[num4];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num2] !== board[num3] && board[num3] !== board[num4]) {
        copy[num1] = board[num2];
        copy[num2] = board[num3];
        copy[num3] = board[num4];
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num3] === board[num4] && board[num2] !== board[num3]) {
        copy[num1] = board[num2];
        copy[num2] = board[num3] + board[num4];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      }
    }
  };

  //game logic
  const secondBoxNull = (num1, num2, num3, num4) => {
    if (
      board[num1] !== null &&
      board[num2] === null &&
      board[num3] !== null &&
      board[num4] !== null
    ) {
      let copy = board;
      if (board[num1] === board[num3]) {
        copy[num1] = board[num1] + board[num3];
        copy[num2] = board[num4];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num3] === board[num4]) {
        copy[num2] = board[num3] + board[num4];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num1] !== board[num3]) {
        copy[num2] = board[num3];
        copy[num3] = board[num4];
        copy[num4] = null;
        setBoard(copy);
      }
    }
  };

  //game logic
  const thirdBoxNull = (num1, num2, num3, num4) => {
    if (
      board[num1] !== null &&
      board[num2] !== null &&
      board[num3] === null &&
      board[num4] !== null
    ) {
      let copy = board;
      if (board[num1] === board[num2]) {
        copy[num1] = board[num1] + board[num2];
        copy[num2] = board[num4];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num1] !== board[num2] && board[num2] !== board[num4]) {
        copy[num3] = board[num4];
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num2] === board[num4]) {
        copy[num2] = board[num2] + board[num4];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      }
    }
  };

  //game logic
  const forthBoxNull = (num1, num2, num3, num4) => {
    if (
      board[num1] !== null &&
      board[num2] !== null &&
      board[num3] !== null &&
      board[num4] === null
    ) {
      let copy = board;
      if (board[num1] === board[num2]) {
        copy[num1] = board[num1] + board[num2];
        copy[num2] = board[num3];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num1] !== board[num2] && board[num2] !== board[num3]) {
        setBoard(copy);
      } else if (board[num2] === board[num3]) {
        copy[num2] = board[num2] + board[num3];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      }
    }
  };

  //game logic
  const thirdFourthBoxMissing = (num1, num2, num3, num4) => {
    if (
      board[num1] !== null &&
      board[num2] !== null &&
      board[num3] === null &&
      board[num4] === null
    ) {
      let copy = board;
      if (board[num1] === board[num2]) {
        copy[num1] = board[num1] + board[num2];
        copy[num2] = null;
        setBoard(copy);
      }
    }
  };

  //game logic
  const secondForthBoxMissing = (num1, num2, num3, num4) => {
    if (
      board[num1] !== null &&
      board[num2] === null &&
      board[num3] !== null &&
      board[num4] === null
    ) {
      let copy = board;
      if (board[num1] === board[num3]) {
        copy[num1] = board[num1] + board[num3];
        copy[num3] = null;
        setBoard(copy);
      } else if (board[num1] !== board[num3]) {
        copy[num2] = board[num3];
        copy[num3] = null;
        setBoard(copy);
      }
    }
  };

  //game logic
  const secondThirdBoxMissing = (num1, num2, num3, num4) => {
    if (
      board[num1] !== null &&
      board[num2] === null &&
      board[num3] === null &&
      board[num4] !== null
    ) {
      let copy = board;
      if (board[num1] === board[num4]) {
        copy[num1] = board[num1] + board[num4];
        copy[num2] = null;
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num1] !== board[num4]) {
        copy[num2] = board[num4];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      }
    }
  };

  //game logic
  const firstForthBoxMissing = (num1, num2, num3, num4) => {
    if (
      board[num1] === null &&
      board[num2] !== null &&
      board[num3] !== null &&
      board[num4] === null
    ) {
      let copy = board;
      if (board[num2] === board[num3]) {
        copy[num1] = board[num2] + board[num3];
        copy[num2] = null;
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num2] !== board[num3]) {
        copy[num1] = board[num2];
        copy[num2] = board[num3];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      }
    }
  };

  //game logic
  const firstThirdBoxMissing = (num1, num2, num3, num4) => {
    if (
      board[num1] === null &&
      board[num2] !== null &&
      board[num3] === null &&
      board[num4] !== null
    ) {
      let copy = board;
      if (board[num2] === board[num4]) {
        copy[num1] = board[num2] + board[num4];
        copy[num2] = null;
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num2] !== board[num4]) {
        copy[num1] = board[num2];
        copy[num2] = board[num4];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      }
    }
  };

  //game logic
  const firstSecondBoxMissing = (num1, num2, num3, num4) => {
    if (
      board[num1] === null &&
      board[num2] === null &&
      board[num3] !== null &&
      board[num4] !== null
    ) {
      let copy = board;
      if (board[num3] === board[num4]) {
        copy[num1] = board[num3] + board[num4];
        copy[num2] = null;
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      } else if (board[num3] !== board[num4]) {
        copy[num1] = board[num3];
        copy[num2] = board[num4];
        copy[num3] = null;
        copy[num4] = null;
        setBoard(copy);
      }
    }
  };

  //game logic
  const onlyFirstBoxFilled = (num1, num2, num3, num4) => {
    if (
      board[num1] !== null &&
      board[num2] === null &&
      board[num3] === null &&
      board[num4] === null
    ) {
      let copy = board;
      setBoard(copy);
    }
  };

  //game logic
  const onlySecondBoxFilled = (num1, num2, num3, num4) => {
    if (
      board[num1] === null &&
      board[num2] !== null &&
      board[num3] === null &&
      board[num4] === null
    ) {
      let copy = board;
      copy[num1] = board[num2];
      copy[num2] = null;
      setBoard(copy);
    }
  };

  //game logic
  const onlyThirdBoxFilled = (num1, num2, num3, num4) => {
    if (
      board[num1] === null &&
      board[num2] === null &&
      board[num3] !== null &&
      board[num4] === null
    ) {
      let copy = board;
      copy[num1] = board[num3];
      copy[num3] = null;
      setBoard(copy);
    }
  };

  //game logic
  const onlyForthBoxFilled = (num1, num2, num3, num4) => {
    if (
      board[num1] === null &&
      board[num2] === null &&
      board[num3] === null &&
      board[num4] !== null
    ) {
      let copy = board;
      copy[num1] = board[num4];
      copy[num4] = null;
      setBoard(copy);
    }
  };

  //function to check the entire board and perform actions according to the gmae logic
  const nextMove = (arr) => {
    let newcopy = [...board];
    let status = 0;
    for (let j = 0; j < 4; j++) {
      thirdFourthBoxMissing(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      secondForthBoxMissing(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      secondThirdBoxMissing(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      firstForthBoxMissing(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      firstThirdBoxMissing(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      firstSecondBoxMissing(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      onlyFirstBoxFilled(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      onlySecondBoxFilled(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      onlyThirdBoxFilled(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      onlyForthBoxFilled(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      forthBoxNull(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      thirdBoxNull(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      secondBoxNull(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      firstBoxNull(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
      noBoxNull(arr[j][0], arr[j][1], arr[j][2], arr[j][3]);
    }

    //only generate a new number if the move is valid, else do nothing
    for (let i = 0; i < newcopy.length; i++) {
      if (newcopy[i] !== board[i]) {
        status = 1;
      }
    }
    if (status === 1) {
      generateSpot();
    } else {
      validateFullBoard();
    }
  };

  //handles the key press
  const handleMove = (key) => {
    if (key === 37 || key === 65) {
      //left arrow or "A" key
      nextMove([
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
      ]);
    } else if (key === 38 || key === 87) {
      //up arrow or "W" key
      nextMove([
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
      ]);
    } else if (key === 39 || key === 68) {
      //right arrow or "D" key
      nextMove([
        [3, 2, 1, 0],
        [7, 6, 5, 4],
        [11, 10, 9, 8],
        [15, 14, 13, 12],
      ]);
    } else if (key === 40 || key === 83) {
      //down arrow or "S" key
      nextMove([
        [12, 8, 4, 0],
        [13, 9, 5, 1],
        [14, 10, 6, 2],
        [15, 11, 7, 3],
      ]);
    } else {
      return false;
    }
  };

  //check if the edge cases are legal move
  const validateBoard = () => {
    for (let i = 0; i < board.length; i++) {
      //top square
      if (typeof board[i - 4] === typeof 5) {
        if (board[i] === board[i - 4]) {
          return false;
        }
      }
      //left square
      if (typeof board[i - 1] === typeof 5) {
        if (board[i] === board[i - 1] && i - 1 === 3) {
          continue;
        }
        if (board[i] === board[i - 1] && i - 1 === 7) {
          continue;
        }
        if (board[i] === board[i - 1] && i - 1 === 11) {
          continue;
        }
        if (board[i] === board[i - 1]) {
          return false;
        }
      }
      //bottom square
      if (typeof board[i + 4] === typeof 5) {
        if (board[i] === board[i + 4]) {
          return false;
        }
      }

      // right square
      if (typeof board[i + 1] === typeof 5) {
        if (board[i] === board[i + 1] && i + 1 === 4) {
          continue;
        }
        if (board[i] === board[i + 1] && i + 1 === 8) {
          continue;
        }
        if (board[i] === board[i + 1] && i + 1 === 12) {
          continue;
        }
        if (board[i] === board[i + 1]) {
          return false;
        }
      }
    }
    return true;
  };

  //generate a new number depends on the current board status
  const generateSpot = () => {
    try {
      let randomSpot = Math.floor(Math.random() * 16);
      if (board[randomSpot] === null) {
        let copy = [...board];
        copy[randomSpot] = generateNum();
        setBoard(copy);
      } else {
        generateSpot();
      }
    } catch (error) {
      //board is full, then check if game should end
      if (error instanceof RangeError) {
        setIsGameOver(validateBoard());
        console.log(error);
      }
    }
  };

  //a copy of the board to validate game status behind the sence
  const validateFullBoard = () => {
    try {
      let randomSpot = Math.floor(Math.random() * 16);
      if (board[randomSpot] === null) {
        let copy = [...board];
        copy[randomSpot] = generateNum();
      } else {
        validateFullBoard();
      }
    } catch (error) {
      if (error instanceof RangeError) {
        setIsGameOver(validateBoard());
        console.log(error);
      }
    }
  };

  //resets the game-board
  const handleReset = (e) => {
    setIsGameOver(false);
    setBoard(initBoard);
  };

  //jsx rednering of the scoreboard and gameboard
  return (
    <>
      <div id="mainContainer">
        <ScoreBoard reset={handleReset} score={board} />
        <GameBoard board={board} isGameOver={isGameOver} reset={handleReset} />
      </div>
    </>
  );
}

export default App;

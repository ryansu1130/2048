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
    generateNum(),
    null,
    generateNum(),
  ];
  const [board, setBoard] = useState(initBoard);
  const [isGameOver, setIsGameOver] = useState(false)
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
        else if (board[num3] === board[num4]){
          copy[num2] = board[num3] + board[num4]
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

  const thirdFourthBoxMissing = (num1, num2, num3, num4) =>{
    if(board[num1] !== null && board[num2] !== null && board[num3] === null &&board[num4] === null )
    {
      let copy = board;
      if(board[num1] === board[num2])
      {
        copy[num1] = board[num1] + board[num2]
        copy[num2] = null
        setBoard(copy)
      }
    }
  }

  const secondForthBoxMissing = (num1, num2, num3, num4) =>{
    if(board[num1] !== null && board[num2] === null && board[num3] !== null &&board[num4] === null )
    {
      let copy = board;
      if(board[num1] === board[num3])
      {
        copy[num1] = board[num1] + board[num3]
        copy[num3] = null
        setBoard(copy)
      }
      else if(board[num1] !== board[num3])
      {
        copy[num2] = board[num3]
        copy[num3] = null
        setBoard(copy)
      }
    }
  }

  const secondThirdBoxMissing = (num1, num2, num3, num4) =>{
    if(board[num1] !== null && board[num2] === null && board[num3] === null &&board[num4] !== null )
    {
      let copy = board;
      if(board[num1] === board[num4])
      {
        copy[num1] = board[num1] + board[num4]
        copy[num2] = null
        copy[num3] = null
        copy[num4] = null
        setBoard(copy)
      }
      else if(board[num1] !== board[num4])
      {
        copy[num2] = board[num4]
        copy[num3] = null
        copy[num4] = null
        setBoard(copy)
      }
    }
  }


  const firstForthBoxMissing = (num1,num2,num3,num4) =>{
    if(board[num1] === null && board[num2] !== null && board[num3] !== null &&board[num4] === null )
    {
      let copy = board;
      if(board[num2] === board[num3])
      {
        copy[num1] = board[num2] + board[num3]
        copy[num2] = null
        copy[num3] = null
        copy[num4] = null
        setBoard(copy)
      }
      else if(board[num2] !== board[num3])
      {
        copy[num1] = board[num2]
        copy[num2] = board[num3]
        copy[num3] = null
        copy[num4] = null
        setBoard(copy)
      }
    }
  }

  const firstThirdBoxMissing = (num1,num2,num3,num4) =>{
    
    if(board[num1] === null && board[num2] !== null && board[num3] === null &&board[num4] !== null )
    {
      let copy = board;
      if(board[num2] === board[num4])
      {
        copy[num1] = board[num2] + board[num4]
        copy[num2] = null
        copy[num3] = null
        copy[num4] = null
        setBoard(copy)
      }
      else if(board[num2] !== board[num4])
      {
        copy[num1] = board[num2]
        copy[num2] = board[num4]
        copy[num3] = null
        copy[num4] = null
        setBoard(copy)
      }
    }
  }

  const firstSecondBoxMissing = (num1,num2,num3,num4) =>{
    if(board[num1] === null && board[num2] === null && board[num3] !== null &&board[num4] !== null )
    {
      let copy = board;
      if(board[num3] === board[num4])
      {
        copy[num1] = board[num3] + board[num4]
        copy[num2] = null
        copy[num3] = null
        copy[num4] = null
        setBoard(copy)
      }
      else if(board[num3] !== board[num4])
      {
        copy[num1] = board[num3]
        copy[num2] = board[num4]
        copy[num3] = null
        copy[num4] = null
        setBoard(copy)
      }
    }
  }

  const onlyFirstBoxFilled = (num1, num2, num3, num4) => {
    if(board[num1] !== null && board[num2] === null && board[num3] === null &&board[num4] === null )
    {
      let copy = board;
      setBoard(copy)
    }
  }

  const onlySecondBoxFilled = (num1, num2, num3, num4) => {
    if(board[num1] === null && board[num2] !== null && board[num3] === null &&board[num4] === null )
    {
      let copy = board;
      copy[num1] = board[num2]
      copy[num2] = null
      setBoard(copy)
    }
  }

  const onlyThirdBoxFilled = (num1, num2, num3, num4) => {
    if(board[num1] === null && board[num2] === null && board[num3] !== null &&board[num4] === null )
    {
      let copy = board;
      copy[num1] = board[num3]
      copy[num3] = null
      setBoard(copy)
    }
  }

  const onlyForthBoxFilled = (num1, num2, num3, num4) => {
    if(board[num1] === null && board[num2] === null && board[num3] === null &&board[num4] !== null )
    {
      let copy = board;
      copy[num1] = board[num4]
      copy[num4] = null
      setBoard(copy)
    }
  }

  const nextMove = (arr) =>{
      for (let j = 0; j < 4; j++) {
        thirdFourthBoxMissing(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        secondForthBoxMissing(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        secondThirdBoxMissing(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        firstForthBoxMissing(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        firstThirdBoxMissing(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        firstSecondBoxMissing(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        onlyFirstBoxFilled(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        onlySecondBoxFilled(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        onlyThirdBoxFilled(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        onlyForthBoxFilled(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        forthBoxNull(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        thirdBoxNull(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        secondBoxNull(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        firstBoxNull(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
        noBoxNull(arr[j][0],arr[j][1],arr[j][2],arr[j][3])
      }     
  }

  const handleMove = (key) => {
    
    if (key === 37 || key === 65) {
      //left arrow or "A" key
      nextMove([[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]])
      generateSpot();

    } else if (key === 38 || key === 87) {
      //up arrow or "W" key
      nextMove([[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15]])
      generateSpot();

    } else if (key === 39 || key === 68) {
      //right arrow or "D" key
      nextMove([[3,2,1,0],[7,6,5,4],[11,10,9,8],[15,14,13,12]])
      generateSpot();

    } else if (key === 40 || key === 83) {
      //down arrow or "S" key
      nextMove([[12,8,4,0],[13,9,5,1],[14,10,6,2],[15,11,7,3]])
      generateSpot();

    } else {
      return false;
    }
  };

  const validateBoard = () => {
    for (let i = 0; i < board.length; i++) {
      //top square
      if(typeof(board[i - 4]) === typeof(5)){
        // console.log("top" , board[i - 4])
        if(board[i] === board[i - 4])
        {
          console.log("top" , board[i - 4])
          return false
        }
      }
      //left square
      if(typeof(board[i - 1]) === typeof(5))
      {
        // console.log("left", board[i - 1])
        if(board[i] === board[i - 1] && (i - 1) === 3){
          continue
        }
        if(board[i] === board[i - 1] && (i - 1) === 7){
          continue
        }
        if(board[i] === board[i - 1] && (i - 1) === 11){
          continue
        }
        if(board[i] === board[i - 1])
        {
          console.log("left", board[i - 1])
          return false
        }
      }
      //bottom square
      if(typeof(board[i + 4]) === typeof(5))
      {
        // console.log("Bottom" ,board[i + 4])
        if(board[i] === board[i + 4])
        {
          console.log("Bottom" ,board[i + 4])
          return false
        }
      }

      // right square
      if(typeof(board[i + 1]) === typeof(5))
      {
        // console.log("right" , board[i + 1])

        if(board[i] === board[i + 1] && (i + 1) === 4){
          continue
        }
        if(board[i] === board[i + 1] && (i + 1) === 8){
          continue
        }
        if(board[i] === board[i + 1] && (i + 1) === 12){
          continue
        }
        if(board[i] === board[i + 1])
        {
          // if((i + 1) === 4 || (i + 1) === 10 || (i + 1) === 12){
          //   return true
          // }
            console.log("right" , board[i + 1])
            return false
          
        }

        
      }      
    }
    return true
  }

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
      // console.log(validateBoard())
      // setIsGameOver(validateBoard());
      if (error instanceof RangeError){
        setIsGameOver(validateBoard());
        console.log(error)
      }
      
    }
  };

  const handleReset = (e) => {
    setIsGameOver(false);
    setBoard(initBoard);
  };

  return (
    <>
      <div id="mainContainer">
        <ScoreBoard reset={handleReset} score={board} />
        <GameBoard board={board} isGameOver={isGameOver} reset={handleReset}  />

      </div>
    </>
  );
}

export default App;

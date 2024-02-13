import "./GameControl.css"
export default function GameControl({reset}){
    return(
        <div id="gameControlContainer">
            <button onClick={reset}>New Game</button>
            <button>Finish For Me</button>
        </div>
    )
}
import "./GameControl.css"
export default function GameControl({reset, onReset}){

    //reset game
    const handleReset = () => {
        reset()
        onReset()
    }

    //jsx rendering of the game buttons
    return(
        <div id="gameControlContainer">
            <button onClick={handleReset}>New Game</button>
            <button>AI{` (Coming Soon)`}</button>
        </div>
    )
}
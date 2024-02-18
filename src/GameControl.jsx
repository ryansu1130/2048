import "./GameControl.css"
export default function GameControl({reset, onReset}){
    const handleReset = () => {
        reset()
        onReset()
    }
    return(
        <div id="gameControlContainer">
            <button onClick={handleReset}>New Game</button>
            <button>AI{` (Coming Soon)`}</button>
        </div>
    )
}
import {useProgress} from "../../../contexts/ProgressContext";

export function Game21() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game21</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
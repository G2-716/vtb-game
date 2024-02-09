import {useProgress} from "../../contexts/ProgressContext";

export function Game27() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game27</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
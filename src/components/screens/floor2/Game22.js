import {useProgress} from "../../../contexts/ProgressContext";

export function Game22() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game22</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
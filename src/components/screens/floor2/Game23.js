import {useProgress} from "../../../contexts/ProgressContext";

export function Game23() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game23</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
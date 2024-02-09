import {useProgress} from "../../contexts/ProgressContext";

export function Game36() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game36</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
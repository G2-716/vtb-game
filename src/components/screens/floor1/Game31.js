import {useProgress} from "../../../contexts/ProgressContext";

export function Game31() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game31</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
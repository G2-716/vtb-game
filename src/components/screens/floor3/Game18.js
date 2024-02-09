import {useProgress} from "../../../contexts/ProgressContext";

export function Game18() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game18</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
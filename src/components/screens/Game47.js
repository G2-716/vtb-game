import {useProgress} from "../../contexts/ProgressContext";

export function Game47() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game47</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
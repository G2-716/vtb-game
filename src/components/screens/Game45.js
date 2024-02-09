import {useProgress} from "../../contexts/ProgressContext";

export function Game45() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game45</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
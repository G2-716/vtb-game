import {useProgress} from "../../contexts/ProgressContext";

export function Game310() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game310</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
import {useProgress} from "../../contexts/ProgressContext";

export function Game25() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game25</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
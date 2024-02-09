import {useProgress} from "../../../contexts/ProgressContext";

export function Game24() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game24</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
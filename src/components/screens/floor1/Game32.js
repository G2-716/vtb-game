import {useProgress} from "../../../contexts/ProgressContext";

export function Game32() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game32</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
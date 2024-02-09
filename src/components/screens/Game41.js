import {useProgress} from "../../contexts/ProgressContext";

export function Game41() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game41</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
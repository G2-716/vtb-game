import {useProgress} from "../../contexts/ProgressContext";

export function Game26() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game26</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
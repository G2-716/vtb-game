import {useProgress} from "../../contexts/ProgressContext";

export function Game41() {
    const {screen, next} = useProgress()

    return (
        <div>
            <h1>{screen}</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
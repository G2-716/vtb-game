import {useProgress} from "../../contexts/ProgressContext";

export function Game410() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game410</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
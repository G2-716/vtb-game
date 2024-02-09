import {useProgress} from "../../contexts/ProgressContext";

export function Game44() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game44</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
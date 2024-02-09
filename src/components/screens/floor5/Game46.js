import {useProgress} from "../../../contexts/ProgressContext";

export function Game46() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game46</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
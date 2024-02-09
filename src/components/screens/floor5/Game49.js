import {useProgress} from "../../../contexts/ProgressContext";

export function Game49() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game49</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
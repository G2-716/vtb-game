import {useProgress} from "../../../contexts/ProgressContext";

export function Game52() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game52</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
import {useProgress} from "../../contexts/ProgressContext";

export function Game55() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game55</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
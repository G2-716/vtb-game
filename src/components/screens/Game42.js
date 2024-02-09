import {useProgress} from "../../contexts/ProgressContext";

export function Game42() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game42</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
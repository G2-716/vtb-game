import {useProgress} from "../../contexts/ProgressContext";

export function Game57() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game57</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
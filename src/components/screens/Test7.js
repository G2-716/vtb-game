import {useProgress} from "../../contexts/ProgressContext";

export function Test7() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Test7</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
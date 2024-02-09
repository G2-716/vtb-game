import {useProgress} from "../../../contexts/ProgressContext";

export function Test8() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Test8</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
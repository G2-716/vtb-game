import {useProgress} from "../../contexts/ProgressContext";

export function Test6() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Test6</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
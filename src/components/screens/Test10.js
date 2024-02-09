import {useProgress} from "../../contexts/ProgressContext";

export function Test10() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Test10</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
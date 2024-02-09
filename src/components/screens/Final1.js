import {useProgress} from "../../contexts/ProgressContext";

export function Final1() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Final1</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
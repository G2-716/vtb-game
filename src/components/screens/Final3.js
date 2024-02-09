import {useProgress} from "../../contexts/ProgressContext";

export function Final3() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Final3</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
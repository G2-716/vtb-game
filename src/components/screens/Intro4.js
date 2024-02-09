import {useProgress} from "../../contexts/ProgressContext";

export function Intro4() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Intro4</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
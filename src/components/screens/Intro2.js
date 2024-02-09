import {useProgress} from "../../contexts/ProgressContext";

export function Intro2() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Intro2</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
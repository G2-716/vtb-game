import {useProgress} from "../../contexts/ProgressContext";

export function Intro1() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Intro1</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
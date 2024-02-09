import {useProgress} from "../../contexts/ProgressContext";

export function Intro3() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Intro3</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
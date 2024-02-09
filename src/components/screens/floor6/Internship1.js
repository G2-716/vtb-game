import {useProgress} from "../../../contexts/ProgressContext";

export function Internship1() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Internship1</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}
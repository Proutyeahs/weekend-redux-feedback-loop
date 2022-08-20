import { useHistory } from "react-router-dom";

function Wack() {

    const history = useHistory()

    const next = () => {
        event.preventDefault()
        history.push('/feeling')
    }

    return (
        <>
            <h1>Start assesment?</h1>
            <form onSubmit={next}>
                <button>Start</button>
            </form>
        </>
    )
}

export default Wack
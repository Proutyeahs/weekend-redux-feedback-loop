import { useHistory } from "react-router-dom";

function Thank() {

    const history = useHistory()

    const next = () => {
        event.preventDefault()
        history.push('/feeling')
    }

    return (
        <>
            <h1>Thank!</h1>
            <form onSubmit={next}>
                <button>Start New Survey?</button>
            </form>
        </>
    )
}

export default Thank
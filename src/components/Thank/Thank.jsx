import { useHistory } from "react-router-dom";

function Thank() {

    const history = useHistory()

    const next = () => {
        event.preventDefault()
        history.push('/feeling')
    }

    const main = () => {
        event.preventDefault()
        history.push('/')
    }

    return (
        <>
            <h1>Thanks you!</h1>
            <h2>Start New Survey?</h2>
            <form onSubmit={next}>
                <button>Yes</button>
            </form>
            <form onSubmit={main}>
                <button>No</button>
            </form>
        </>
    )
}

export default Thank
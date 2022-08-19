import { useHistory } from "react-router-dom";

function Wack() {

    const history = useHistory()

    const next = () => {
        history.push('/feeling')
    }

    return (
        <>
            <h1>Start assesment?</h1>
            <form onSubmit={next}>
                <button>Next</button>
            </form>
        </>
    )
}

export default Wack
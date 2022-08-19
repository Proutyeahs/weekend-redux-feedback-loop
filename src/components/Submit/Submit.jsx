import { useHistory } from "react-router-dom";

function Submit() {

    const history = useHistory()

    const next = () => {
        history.push('/')
    }

    return (
        <>
            <h1>IS all your info correct?</h1>
            <form onSubmit={next}>
                <button>Next</button>
            </form>
        </>
    )
}

export default Submit
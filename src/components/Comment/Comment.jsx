import { useHistory } from "react-router-dom";

function Comment() {

    const history = useHistory()

    const next = () => {
        history.push('/submit')
    }

    return (
        <>
            <h1>add comments here</h1>
            <form onSubmit={next}>
                <button>Next</button>
            </form>
        </>
    )
}

export default Comment
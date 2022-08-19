import { useHistory } from "react-router-dom";

function Feeling() {

    const history = useHistory()

    const next = () => {
        history.push('/understand')
    }

    return (
        <>
            <h1>how r u feeling</h1>
            <form onSubmit={next}>
                <button>Next</button>
            </form>
        </>
    )
}

export default Feeling
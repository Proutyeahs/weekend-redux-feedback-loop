import { useHistory } from "react-router-dom";

function Support() {

    const history = useHistory()

    const next = () => {
        history.push('/comment')
    }

    return (
        <>
            <h1>R u feeling supported</h1>
            <form onSubmit={next}>
                <button>Next</button>
            </form>
        </>
    )
}

export default Support
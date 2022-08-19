import { useHistory } from "react-router-dom";

function Understand() {

    const history = useHistory()

    const next = () => {
        history.push('/support')
    }

    return (
        <>
            <h1>how well do u understand things</h1>
            <form onSubmit={next}>
                <button>Next</button>
            </form>
        </>
    )
}

export default Understand
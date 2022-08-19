import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Submit() {

    const history = useHistory()
    let dispatch = useDispatch()

    const next = () => {
        event.preventDefault()
        dispatch({
            type: 'CLEAR',
        })
        history.push('/thank')
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
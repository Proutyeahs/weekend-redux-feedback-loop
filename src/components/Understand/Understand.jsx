import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understand() {

    const history = useHistory()
    let dispatch = useDispatch()

    let [understand, setUnderstand] = useState('')

    const next = () => {
        event.preventDefault()
        console.log(understand)
        dispatch({
            type: 'UNDERSTAND',
            payload: understand
        })
        setUnderstand('')
        history.push('/support')
    }

    return (
        <>
            <h1>how well do u understand things</h1>
            <form onSubmit={next}>
            <input onChange={(e) => setUnderstand(e.target.value)} type='number' />
                <button>Next</button>
            </form>
        </>
    )
}

export default Understand
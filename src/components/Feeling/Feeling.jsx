import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feeling() {

    const history = useHistory()
    let dispatch = useDispatch()

    let [feeling, setFeeling] = useState('')

    const next = () => {
        event.preventDefault()
        console.log(feeling)
        dispatch({
            type: 'FEELING',
            payload: feeling
        })
        setFeeling('')
        history.push('/understand')
    }

    return (
        <>
            <h1>how r u feeling</h1>
            <form onSubmit={next}>
                <input onChange={(e) => setFeeling(e.target.value)} type='number' />
                <button>Next</button>
            </form>
        </>
    )
}

export default Feeling
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Support() {

    const history = useHistory()
    let dispatch = useDispatch()

    let [support, setSupport] = useState('')

    const next = () => {
        event.preventDefault()
        console.log(support)
        dispatch({
            type: 'SUPPORT',
            payload: support
        })
        setSupport('')
        history.push('/comment')
    }

    return (
        <>
            <h1>R u feeling supported</h1>
            <form onSubmit={next}>
                <input onChange={(e) => setSupport(e.target.value)} type='number' />
                <button>Next</button>
            </form>
        </>
    )
}

export default Support
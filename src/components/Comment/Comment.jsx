import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comment() {

    const history = useHistory()
    let dispatch = useDispatch()

    let [comment, setComment] = useState('')

    const next = () => {
        event.preventDefault()
        console.log(comment)
        dispatch({
            type: 'COMMENT',
            payload: comment
        })
        setComment('')
        history.push('/submit')
    }

    return (
        <>
            <h1>add comments here</h1>
            <form onSubmit={next}>
                <input onChange={(e) => setComment(e.target.value)} type='text' />
                <button>Next</button>
            </form>
        </>
    )
}

export default Comment
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comment() {

    const history = useHistory()
    let dispatch = useDispatch()

    let [comment, setComment] = useState('')

    const commentChange = (e) => {
        setComment(e.target.value)
    }

    const next = () => {
        event.preventDefault()
        console.log(comment)
        dispatch({
            type: 'RESULT',
            payload: comment
        })
        setComment('')
        history.push('/submit')
    }

    return (
        <>
            <h1>add comments here</h1>
            <form onSubmit={next}>
                <input onChange={commentChange} type='text' />
                <button>Next</button>
            </form>
        </>
    )
}

export default Comment
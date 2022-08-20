import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comment() {

    const history = useHistory()
    let dispatch = useDispatch()

    let [comment, setComment] = useState({ comments: '' })

    const commentChange = (e) => {
        setComment({
            ...comment,
            comments: e.target.value
        })
    }

    const next = () => {
        event.preventDefault()
        console.log(comment)
        dispatch({
            type: 'RESULT',
            payload: comment
        })
        setComment({ comments: '' })
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
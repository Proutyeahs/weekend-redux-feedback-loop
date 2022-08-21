import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';

function Comment() {

    const history = useHistory()
    let dispatch = useDispatch()

    // tracks changes to the input feild
    let [comment, setComment] = useState('')

    const commentChange = (e) => {
        setComment(e.target.value)
    }

    // Sends input to the reducer and moves to the next page
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
            <h1>Please add any additional comments you may have</h1>
            <form onSubmit={next}>
                <TextField
                    id="standard-basic" label="Comments"
                    onChange={commentChange} type='text' />
                <Button type="submit" variant="outlined" color="secondary">Next</Button>
            </form>
        </>
    )
}

export default Comment
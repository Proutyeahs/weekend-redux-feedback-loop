import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';

function Feeling() {

    const history = useHistory()
    let dispatch = useDispatch()

    const min = 1;
    const max = 10;

    // Holds the value and limits the input to 1-10
    const [value, setValue] = useState('');

    const handleChange = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setValue(value);
    };

    // Sends input to the reducer and moves to the next page
    const next = () => {
        if (value === '') {
            alert('Please rate your emotional state!')
        } else {
            event.preventDefault()
            console.log(value)
            dispatch({
                type: 'RESULT',
                payload: value
            })
            setValue('')
            history.push('/understand')
        }
    }

    return (
        <>
            <h1>On a scale of one to ten how are you feeling?</h1>
            <form onSubmit={next}>
                <TextField
                    id="standard-basic" label="Rating"
                    value={value}
                    onChange={handleChange} type='number' />
                <Button type="submit" variant="outlined" color="secondary">Next</Button>
            </form>
        </>
    )
}

export default Feeling
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';

function Support() {

    const history = useHistory()
    let dispatch = useDispatch()

    const min = 0;
    const max = 10;

    // Holds the value and limits the input to 0-10
    const [value, setValue] = useState('');

    const handleChange = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setValue(value);
    };

    // Sends input to the reducer and moves to the next page
    const next = () => {
        if (value === '') {
            alert('Please rate how supported you feel!')
        } else {
            event.preventDefault()
            console.log(value)
            dispatch({
                type: 'RESULT',
                payload: value
            })
            setValue('')
            history.push('/comment')
        }
    }

    return (
        <>
            <h1>On a scale of zero to ten how supported do you feel?</h1>
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

export default Support
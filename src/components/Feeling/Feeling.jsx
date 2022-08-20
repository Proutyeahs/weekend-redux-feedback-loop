import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feeling() {

    const history = useHistory()
    let dispatch = useDispatch()

    let [feeling, setFeeling] = useState('')

    const feelingChange = (e) => {
        setFeeling(e.target.value)
    }

    const next = () => {
        if (feeling === '') {
            alert('Please rate your emotional state!')
        } else {
            event.preventDefault()
            console.log(feeling)
            dispatch({
                type: 'RESULT',
                payload: feeling
            })
            setFeeling('')
            history.push('/understand')
        }
    }

    return (
        <>
            <h1>how r u feeling</h1>
            <form onSubmit={next}>
                <input onChange={feelingChange} type='number' />
                <button>Next</button>
            </form>
        </>
    )
}

export default Feeling
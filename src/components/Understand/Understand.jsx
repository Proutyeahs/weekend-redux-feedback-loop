import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understand() {

    const history = useHistory()
    let dispatch = useDispatch()

    let [understand, setUnderstand] = useState('')

    const understandChange = (e) => {
        setUnderstand(e.target.value)
    }

    const next = () => {
        if (understand === '') {
            alert('Please rate how well you understand everything!')
        } else {
            event.preventDefault()
            console.log(understand)
            dispatch({
                type: 'RESULT',
                payload: understand
            })
            setUnderstand('')
            history.push('/support')
        }
    }

    return (
        <>
            <h1>how well do u understand things</h1>
            <form onSubmit={next}>
                <input onChange={understandChange} type='number' />
                <button>Next</button>
            </form>
        </>
    )
}

export default Understand
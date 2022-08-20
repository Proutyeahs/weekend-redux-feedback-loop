import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Support() {

    const history = useHistory()
    let dispatch = useDispatch()

    let [support, setSupport] = useState('')

    const supportChange = (e) => {
        setSupport(e.target.value)
    }

    const next = () => {
        if (support === '') {
            alert('Please rate how supported you feel!')
        } else {
            event.preventDefault()
            console.log(support)
            dispatch({
                type: 'RESULT',
                payload: support
            })
            setSupport('')
            history.push('/comment')
        }
    }

    return (
        <>
            <h1>R u feeling supported</h1>
            <form onSubmit={next}>
                <input onChange={supportChange} type='number' />
                <button>Next</button>
            </form>
        </>
    )
}

export default Support
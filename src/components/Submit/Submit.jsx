import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'

function Submit() {

    const history = useHistory()
    let dispatch = useDispatch()
    const surveyResults = useSelector((store) => store.surveyResults);

    const next = () => {
        event.preventDefault()
        dispatch({
            type: 'CLEAR',
        })
        history.push('/thank')
    }

    return (
        <>
            <h1>IS all your info correct?</h1>
            <table>
                <thead>
                    <tr>
                        <th>how are you feeling?:</th>
                        <th>How well are you understanding everything?:</th>
                        <th>How supported do you feel?:</th>
                        <th>What comments do you have?:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {surveyResults.map(results => (
                            <td key={results}>{results}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <form onSubmit={next}>
                <button>Next</button>
            </form>
        </>
    )
}

export default Submit
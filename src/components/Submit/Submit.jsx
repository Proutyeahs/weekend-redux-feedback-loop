import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import axios from "axios";

function Submit() {

    const history = useHistory()
    let dispatch = useDispatch()
    const surveyResults = useSelector((store) => store.surveyResults);

    const next = () => {
        console.log(surveyResults)
        axios({
            method: 'POST',
            url: '/survey',
            data: {
                feeling: surveyResults[0],
                understanding: surveyResults[1],
                support: surveyResults[2],
                comments: surveyResults[3]
            }
        }).then(response => {
            event.preventDefault()
            dispatch({
                type: 'CLEAR',
            })
            history.push('/thank')
        }).catch(err => {
            console.log('submit', err)
        })
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
                        <td>{surveyResults[0]}</td>
                        <td>{surveyResults[1]}</td>
                        <td>{surveyResults[2]}</td>
                        <td>{surveyResults[3]}</td>
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
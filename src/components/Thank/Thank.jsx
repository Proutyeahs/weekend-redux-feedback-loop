import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

function Thank() {

    const history = useHistory()

    const next = () => {
        history.push('/feeling')
    }

    const main = () => {
        history.push('/')
    }

    return (
        <>
            <h1>Thank you!</h1>
            <h2>Start New Survey?</h2>
            <Button onClick={next} variant="outlined" color="secondary">Yes</Button>
            <Button onClick={main} variant="outlined" color="secondary">No</Button>
        </>
    )
}

export default Thank
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

function Wack() {

    const history = useHistory()

    const next = () => {
        history.push('/feeling')
    }

    return (
        <>
            <h1>Start assesment?</h1>
            <Button onClick={next} variant="outlined" color="secondary">Start</Button>
        </>
    )
}

export default Wack
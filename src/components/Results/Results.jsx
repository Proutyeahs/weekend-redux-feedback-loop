import axios from "axios";
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

// MUI style
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

function Results({ answers, getSurveys }) {

    // Deletes entries from the DB
    const remove = (id) => {
        axios({
            method: 'DELETE',
            url: `/survey/${id}`
        }).then(results => {
            console.log(results)
            getSurveys()
        }).catch(err => {
            console.log(err)
        })
    }

    // Updates the flagging value in the DB
    const flag = (id) => {
        axios({
            method: 'PUT',
            url: `/survey/flag/${id}`,
            data: {
                isFlagged: !answers.flagged
            }
        }).then((response) => {
            console.log(response)
            getSurveys()
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <StyledTableCell>
                {answers.feeling}
            </StyledTableCell>
            <StyledTableCell>
                {answers.understanding}
            </StyledTableCell>
            <StyledTableCell>
                {answers.support}
            </StyledTableCell>
            <StyledTableCell>
                {answers.comments}
            </StyledTableCell>
            <StyledTableCell>
                <Button
                    style={{
                        backgroundColor: answers.flagged ? 'hotpink' : ''
                    }}
                    onClick={() => flag(answers.id)}>Flag</Button>
                <Button onClick={() => remove(answers.id)}>Delete</Button>
            </StyledTableCell>
        </>
    )
}

export default Results
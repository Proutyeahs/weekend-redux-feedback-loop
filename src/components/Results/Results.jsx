import axios from "axios";
import { useState } from "react";
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

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

    const [isFlagged, setIsFlagged] = useState(false)

    const flag = (id) => {
        setIsFlagged(current => !current);
        console.log(isFlagged)
        axios({
            method: 'PUT',
            url: `/survey/flag/${id}`,
            data: {
                isFlagged: isFlagged
            }
        }).then((response) => {
            console.log(response)
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
                        backgroundColor: isFlagged ? 'hotpink' : ''
                    }}
                    onClick={() => flag(answers.id)}>Flag</Button>
                <Button onClick={() => remove(answers.id)}>Delete</Button>
            </StyledTableCell>
        </>
    )
}

export default Results
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function Admin() {

    useEffect(() => {
        getSurveys();
    }, []);

    const [results, setResults] = useState([])

    const getSurveys = () => {
        axios.get('/survey').then(response => {
            console.log(response.data)
            setResults(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

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
            //getSurveys()
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <h1>Admin Page</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Feelings</StyledTableCell>
                            <StyledTableCell>Understanding</StyledTableCell>
                            <StyledTableCell>Support</StyledTableCell>
                            <StyledTableCell>Comments</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {results.map(answers => (
                            <StyledTableRow
                                style={{
                                    backgroundColor: isFlagged ? 'hotpink' : ''
                                }}
                                key={answers.id}>
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
                                    <Button onClick={() => flag(answers.id)}>Flag</Button>
                                    <Button onClick={() => remove(answers.id)}>Delete</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Admin
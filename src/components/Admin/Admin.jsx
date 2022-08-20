import axios from "axios";
import { useState, useEffect } from "react";
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Results from "../Results/Results";

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
                            <StyledTableRow key={answers.id}>
                                <Results getSurveys={getSurveys} answers={answers}/>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Admin
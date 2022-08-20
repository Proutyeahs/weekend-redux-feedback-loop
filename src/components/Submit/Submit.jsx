import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import axios from "axios";
import Button from '@material-ui/core/Button';
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
            <TableContainer>
            <Table>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>how are you feeling?:</StyledTableCell>
                        <StyledTableCell>How well are you understanding everything?:</StyledTableCell>
                        <StyledTableCell>How supported do you feel?:</StyledTableCell>
                        <StyledTableCell>What comments do you have?:</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell>{surveyResults[0]}</StyledTableCell>
                        <StyledTableCell>{surveyResults[1]}</StyledTableCell>
                        <StyledTableCell>{surveyResults[2]}</StyledTableCell>
                        <StyledTableCell>{surveyResults[3]}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
            </TableContainer>
            <Button onClick={next} variant="outlined" color="secondary">Submit</Button>
        </>
    )
}

export default Submit
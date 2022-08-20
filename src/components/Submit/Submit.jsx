import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import axios from "axios";
import { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Submit.css';

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

    const min = 0;
    const max = 10;

    const [value, setValue] = useState('');

    const handleChange = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setValue(value);
    };

    const [value1, setValue1] = useState('');

    const handleChange1 = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setValue1(value);
    };

    const [value2, setValue2] = useState('');

    const handleChange2 = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setValue2(value);
    };

    const [value3, setValue3] = useState('');

    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const edit = () => {
    if (value === '' || value1 === '' || value2 === '' || value3 === '') {
        alert('Be sure to input ratings for your feelings, understanding and support')
    } else {
        event.preventDefault()
        console.log(value)
        dispatch({
            type: 'EDIT',
            payload: [value, value1, value2, value3]
        })
        setValue('')
        setValue1('')
        setValue2('')
        setValue3('')
    }
}

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
                            <StyledTableCell>
                                <TextField
                                    id="standard-basic" label={surveyResults[0]}
                                    value={value}
                                    onChange={handleChange} type='number' />
                            </StyledTableCell>
                            <StyledTableCell>
                                <TextField
                                    id="standard-basic"
                                    value={value1} label={surveyResults[1]}
                                    onChange={handleChange1} type='number' />
                            </StyledTableCell>
                            <StyledTableCell>
                                <TextField
                                    id="standard-basic"
                                    value={value2} label={surveyResults[2]}
                                    onChange={handleChange2} type='number' />
                            </StyledTableCell>
                            <StyledTableCell>
                                <TextField
                                    id="standard-basic"
                                    value={value3} label={surveyResults[3]}
                                    onChange={handleChange3} type='text' />
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button onClick={edit} variant="outlined" color="secondary">Edit enties</Button>
            <Button onClick={next} variant="outlined" color="secondary">Submit</Button>
        </>
    )
}

export default Submit
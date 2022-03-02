import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './TrackerTable.css';


function NewTable({ data }) {
  const rows = data; 
  console.log(rows.id)  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500, maxWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name of Problem</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">LeetCode Link</TableCell>
            <TableCell align="right">Notes</TableCell>
            <TableCell align="right">Video Solution</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right"><a href="link">{row.link}</a></TableCell>
              <TableCell align="right">{row.notes}</TableCell>
              <TableCell align="right">{row.solution}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default NewTable;

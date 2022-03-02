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
    <TableContainer className="tableContainer"component={Paper}>
      <Table className="table"sx={{ minWidth: 500, maxWidth: 800 }} aria-label="simple table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">Name of Problem</TableCell>
            <TableCell className="tableCell"align="right">Category</TableCell>
            <TableCell className="tableCell"align="right">LeetCode Link</TableCell>
            <TableCell className="tableCell"align="right">Notes</TableCell>
            <TableCell className="tableCell"align="right">Video Solution</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="tableCell"align="right">{row.category}</TableCell>
              <TableCell className="tableCell"align="right"><a href="link">{row.link}</a></TableCell>
              <TableCell className="tableCell"align="right">{row.notes}</TableCell>
              <TableCell className="tableCell"align="right">{row.solution}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default NewTable;

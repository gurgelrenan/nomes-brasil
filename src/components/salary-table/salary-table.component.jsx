import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const SalaryTable = ({props}) => {
  
  return(
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Estado</TableCell>
            <TableCell align="right">Média Salarial</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.map(({uf, value}) => (
            <TableRow key={uf}>
              <TableCell component="th" scope="row">
                {uf}
              </TableCell>
              <TableCell align="right">{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default SalaryTable;
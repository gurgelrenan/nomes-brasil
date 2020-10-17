import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from '../../ProTip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        @gurgelrenan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const SalaryTable = ({ props }) => {

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Média Salarial Brasileira
      </Typography>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Estado</TableCell>
                <TableCell align="right">Média Salarial</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.map(({ uf, value }) => (
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
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
};

export default SalaryTable;
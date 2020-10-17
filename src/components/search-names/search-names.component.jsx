import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const SearchNames = () => {
  const [name, setName] = useState('');
  const [nameData, setNameData] = useState({ nome: '', sexo: null, localidade: '', res: [] });

  async function fetchData(e) {
    e.preventDefault();

    if (name === '') return;

    try {
      const result = await axios(
        `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}`
      );
      setNameData(result.data[0]);
    } catch (error) {
      console.log('error:', error.message);
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Nomes do Brasil</h1>
          <form onSubmit={(e) => fetchData(e)}>
            <TextField
              label="Digite um nome"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <Button variant="contained" size="medium" type="submit">Buscar</Button>
          </form>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          {nameData.nome}<br />
          {nameData.sexo}<br />
          {nameData.localidade}<br />
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Período</TableCell>
                <TableCell>Frequência</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nameData.res.map(({ periodo, frequencia }) =>
                <TableRow key={periodo}>
                  <TableCell component="th" scope="row">
                    {periodo}
                  </TableCell>
                  <TableCell>{frequencia}</TableCell>
                </TableRow>
              )}  
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchNames;
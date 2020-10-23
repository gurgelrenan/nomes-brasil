import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Header from '../header/header.component';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/gurgelrenan/salary-overview">
        @gurgelrenan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const SearchNames = () => {
  const [name, setName] = useState('');
  const [nameData, setNameData] = useState({ nome: '', sexo: null, localidade: '', res: [] });
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = async () => {
    if (name === '') return;

    try {
      const result = await axios(
        `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}`
      );
      
      if (Array.isArray(result.data) && result.data.length) {
        setNameData(result.data[0]);
        setErrorMessage('');
      } else {
        setErrorMessage(`Não existe resultados para o nome: ${name}`)
      }
      
    } catch (error) {
      console.log('error:', error.message);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    fetchData();
  }

  return (
    <div>
      <Header />
      <Container component="main">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Nomes do Brasil
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Será que você tem um nome popular?
        </Typography>
      </Container>

      <Container component="main">
        <Grid item xs={12}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <TextField
              label="Digite um nome"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <Button variant="contained" size="medium" type="submit">Buscar</Button>
          </form>
          <span>{errorMessage}</span>
        </Grid>

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
      </Container>

      <Container component="footer">
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default SearchNames;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const SearchNames = () => {
  const [name, setName] = useState('');
  const [nameData, setNameData] = useState({nome: '', sexo: null, localidade: '', res: []});

  useEffect(() => {
    fetchData();
  }, [nameData]);

  async function fetchData() {
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
          <TextField
            label="Digite um nome"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <Button variant="contained" size="medium" onClick={() => fetchData()}>Buscar</Button>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
            {/* {nameData.res} */}
            {/* {console.log(nameData)} */}
            {nameData.nome}<br />
            {nameData.sexo}<br />
            {nameData.localidade}<br />
            {nameData.res.map(({periodo, frequencia}) => 
              <div>
                {`Periodo: ${periodo} Frequencia: ${frequencia}`}
              </div>
            )}
            <hr/>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchNames;
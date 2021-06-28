import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

const BrazilNames = () => {
  const [name, setName] = useState('')
  const [data, setData] = useState({ nome: '', sexo: null, localidade: '', res: [] })
  const [errorMessage, setErrorMessage] = useState('')

  const fetchData = async () => {
    if (name === '') return;
    
    try {
      const result = await axios(
        `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}`
      );
      
      if (Array.isArray(result.data) && result.data.length) {
        setData(result.data[0]);
      } else {
        setErrorMessage(`Não existe resultados para o nome: ${name}`)
        setData({ nome: '', sexo: null, localidade: '', res: [] })
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
    <div style={{paddingTop: 20}}>
      <div>
        <span>{errorMessage}</span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Grid container justify="center">
            <Grid item>
              <TextField
                name="name"
                required
                label="Nome"
                autoFocus
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Buscar
            </Button>
          </Grid>
        </form>
      </div>

      <div>
        <p>Localidade: {data.localidade}</p>
        <p>Nome: {data.nome}</p>
        {data.res.map(({periodo, frequencia}) =>
          <p>{periodo} - {frequencia}</p>
        )}
      </div>
    </div>
  )
}

export default BrazilNames;

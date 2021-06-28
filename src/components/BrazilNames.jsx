import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';
import { formatData } from '../lib/utils';

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
        const formatedData = formatData(result.data[0]);
        setData(formatedData);
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

      <Grid container justify="center">
        <Grid item>
          <LineChart width={800} height={600} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="frequencia" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Grid>
      </Grid>
    </div>
  )
}

export default BrazilNames;

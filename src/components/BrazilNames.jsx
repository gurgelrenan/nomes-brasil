import React, { useState } from 'react'
import axios from 'axios'

const BrazilNames = () => {
  const [name, setName] = useState('')
  const [namesQuery, setNamesQuery] = useState({ nome: '', sexo: null, localidade: '', res: [] })
  const [errorMessage, setErrorMessage] = useState('')

  const fetchData = async () => {
    if (name === '') return;
    
    try {
      const result = await axios(
        `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}`
      );
      
      if (Array.isArray(result.data) && result.data.length) {
        setNamesQuery(result.data[0]);
      } else {
        setErrorMessage(`Não existe resultados para o nome: ${name}`)
        setNamesQuery({ nome: '', sexo: null, localidade: '', res: [] })
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
      <h2>Nomes do Brasil</h2>

      <div>
        <span>{errorMessage}</span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="name" placeholder="Digite o nome" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="submit" value="Buscar" />
        </form>
      </div>

      <div>
        <p>Localidade: {namesQuery.localidade}</p>
        <p>Nome: {namesQuery.nome}</p>
        {namesQuery.res.map(({periodo, frequencia}) =>
          <p>{periodo} - {frequencia}</p>
        )}
      </div>
    </div>
  )
}

export default BrazilNames;

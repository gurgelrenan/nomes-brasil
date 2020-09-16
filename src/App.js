import React, { useState } from 'react';
import './App.css';

import { averageIncomes } from './data';

const App = () => {
  const [uf, setUf] = useState('');
  const [salary, setsalary] = useState(0);

  const handleChangeSalary = event => {
    const { value } = event.target;
    setsalary(value);
  }

  const handleChangeUf = event => {
    const { value } = event.target;
    setUf(value);
  }

  const getSalaryByUf = (params_uf) => {
    if (params_uf) {
      return averageIncomes.filter((idx) => idx.uf === params_uf )[0].value;  
    }
  }

  return (
    <div className='home'>
      <h2>Compare seu salário com a média nacional.</h2>
      <form>
        <label>Salário</label>
        <input type="text" onChange={handleChangeSalary} value={salary} />

        <label>Estado</label>
        <select value={uf} onChange={handleChangeUf}>
          {
            averageIncomes.map(
              ({uf, value}) => (
              <option value={uf}>{uf}</option>
              )
            )
          }
        </select>
      </form>

      <span>Seu salário R$ {salary}</span><br />
        <span>A média salarial no estado de {uf} é: R$ {getSalaryByUf(uf)}</span>

    </div>
  );
}

export default App;

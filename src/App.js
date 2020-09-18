import React, { useState } from 'react';
import './App.css';
import { averageIncomes } from './data';
import SalaryTable from './components/salary-table.component';

const App = () => {
  return (
    <SalaryTable props={averageIncomes} />
  );
}

export default App;

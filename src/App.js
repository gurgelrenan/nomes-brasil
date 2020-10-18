import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { averageIncomes } from './data';
import SalaryTable from './components/salary-table/salary-table.component';
import searchNames from './components/search-names/search-names.component';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact
          path='/salaries'
          render={() => (
            <SalaryTable props={averageIncomes} />
          )}
        />
        <Route path='/' component={searchNames} />
      </Switch>
    </div>
  );
}

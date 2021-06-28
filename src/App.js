import React from 'react'
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import BrazilNames from './components/BrazilNames';

const App = () => {
  return (
    <Container>
      <Header />
      <BrazilNames />
    </Container>
  );
}

export default App;


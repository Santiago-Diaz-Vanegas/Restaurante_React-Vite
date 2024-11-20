import React from 'react';
import Header from './components/Header';
import Nosotros from './components/Nosotros';
import Menu from './components/Menu';
import Separador from './components/Separador';
import Chef from './components/Chef';
import Contacto from './components/Contacto';
import PiePagina from './components/PiePagina';
import './styles/styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <Nosotros />
      <Menu />
      <Separador />
      <Chef />
      <Contacto />
      <PiePagina />
    </div>
  );
};

export default App;

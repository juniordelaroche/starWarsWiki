import React, { useState } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

export default function StarWarsApp() {

  const [busqueda, setBusqueda] = useState('obi');

  return (
    <>
      <h1>Wiki Star Wars</h1>
      <Buscador setBusqueda={ setBusqueda }/>
      {
        busqueda==='' ? '' : <Resultado busqueda={ busqueda }/>
      }
    </>
  )
}

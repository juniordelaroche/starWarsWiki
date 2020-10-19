import React from 'react'
import { useFetchPersonaje } from '../hook/useFetchPersonaje';
import Personaje from './Personaje';

export default function Resultado({busqueda}) {
  const {data:personaje,  loading } = useFetchPersonaje(busqueda);
  
  return (
    <>
    <h3>Resultado de { busqueda }</h3>
    <div className='resultado-container'>
      { loading && <p>Cargando...</p> } 
      {
        personaje.length > 0 
        ? personaje.map((p) => (
          <Personaje key={p.name} nombre={p.name} altura={p.height} masa={p.mass} nacimiento={p.birth_year} genero={p.gender}/>
        ))
        : <p>No se encontraron resultados</p>
      }
    </div>
    </>
  )
}

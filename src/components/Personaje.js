import React from 'react'

export default function Personaje({nombre, altura, masa, nacimiento, genero}) {
  return (
    <div className='card-personaje'>
      <p><b>Nombre:</b> {nombre}</p>
      <p><b>Altura:</b> {altura}</p>
      <p><b>Masa:</b> {masa}</p>
      <p><b>Nacimiento/Fabricación:</b> {nacimiento}</p>
      <p><b>Género:</b> {genero}</p>
    </div>
  )
}

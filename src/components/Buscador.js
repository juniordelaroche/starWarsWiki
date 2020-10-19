import React, { useState } from 'react'

export default function Buscador({setBusqueda}) {

  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setBusqueda(inputValue);
    setInputValue('');
  }

  return (
    <form className='formulario' onSubmit={ handleSubmit }>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputValue}
      />
      <hr/>
    </form>
  )
}

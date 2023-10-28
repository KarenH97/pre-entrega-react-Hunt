import React from 'react'
import ComponenteHijo from './components/componentehijo'

const App = () => {

  const nombre = "coder"

  return (
    <div>
      <ComponenteHijo
      //props
      nombre ={nombre}
      
      
      />
    </div>
  )
}

export default App

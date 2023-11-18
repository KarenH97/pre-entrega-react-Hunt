import React from 'react'
import NavBar from './components/./navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'


const App = () => {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a nuestra tienda"} />
    
    </div>
  )
}

export default App

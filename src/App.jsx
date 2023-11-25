import React from 'react'
import { BrowserRouter,Routes, toute } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemList from './components/itemListContainer/ItemList'
import Items from './components/itemListContainer/Items'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import ItemDetail from './components/itemDetailContainer/ItemDetail'
import './App.css'



const App = () => {

  return (
    <> 
    
      <div ><NavBar/></div>
      <div > <ItemListContainer greeting={"Bienvenidos a nuestra tienda"} /> </div>
      <div><ItemList/></div>
      <div><Items/></div>
      <div><ItemDetailContainer/></div>
      <div><ItemDetail/></div>
      
    </>
  )
}

export default App

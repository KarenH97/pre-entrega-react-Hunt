import React from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Home from './components/home/Home'
import './App.css'



const App = () => {

  return (
    <> 
   

      <div ><NavBar/></div>

      
      <div><Home></Home></div>
      <div > <ItemListContainer /> </div>
      <div><ItemDetailContainer/></div>

   
     

    
     
      
    </>
  )
}

export default App

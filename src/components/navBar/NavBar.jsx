import React from 'react'
import CardWidget from './CardWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import logo from '../../assets/logo.png'



const NavBar = () => {
  return (
   
    <div>
        <Flex>
  <Box p='4'>
  <img src={logo} alt="logo" />
  </Box>
  <Spacer/>
  <Menu>
         <MenuButton>
               Categorias
            </MenuButton>
            <MenuList>
               <MenuItem>Antiguedades</MenuItem>
               <MenuItem>Coleccionables</MenuItem>
               <MenuItem>Contacto</MenuItem>
            </MenuList>
        </Menu>
  <Spacer/>
  <Box p='4'>
  <CardWidget/>
  </Box>
</Flex>

        
        
      
    </div>
  )
}

export default NavBar
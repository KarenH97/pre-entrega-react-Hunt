import React from 'react'
import CardWidget from './CardWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'




const NavBar = () => {
  return (
   
    <div>
        <Flex>
  <Box p='4'>
  <h3>brand</h3>
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
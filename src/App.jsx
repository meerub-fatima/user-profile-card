import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Parent from './components/Parent';
const App = () => {
  return (
    <Flex align="center" justify="center" w="100vw" h="100vh" >
      <Parent/>
    </Flex>
  )
}

export default App

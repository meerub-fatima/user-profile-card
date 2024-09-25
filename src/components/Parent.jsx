import React from 'react'
import Card from './Card'
import { Box, Flex } from '@chakra-ui/react'

const Parent = () => {
  return (
    <Flex w={{base : "20rem", md : "30rem", lg : "30rem",xl : "30rem",  } }  borderRadius="4rem" h="30rem" pos="relative" align="center" justify="center" boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)' 
     >
      <Box pos="absolute" borderTopRadius="4rem" top="0" w='full' h="5rem"  bg="blue.300" />
      <Card/>
    </Flex>
  )
}

export default Parent

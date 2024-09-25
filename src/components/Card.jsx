import { Box, Button, Flex, Heading, Img, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube,FaShare } from 'react-icons/fa';
import { CiHeart,CiChat1  } from "react-icons/ci";
const Card = () => {
    
  return (
        <Flex color="#000" pos="relative" bottom="0" align="center" flexDirection="column" gap="2rem" >
          
            <Box borderRadius="50%"  border="3px solid #63b3ed" >
                <Img borderRadius="50%" border="3px solid #fff"  w="10rem" h="10rem" objectFit="cover" objectPosition="center"  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZP9zTf75vBmTD9BJWQmf3DjamXGuvzw44w&s' />
            </Box>
            <Flex flexDir="column" align="center" justify="center" gap=".5rem" >
            <Heading>Coding Lab</Heading>
            <Text fontSize="1.1rem" >Youtuber & Blogger</Text>
            </Flex>
            <Flex align="center" justify="center" gap="2rem" fontSize="2rem"  >
            <FaFacebook style={{ color: '#3b5998' }} />
      <FaTwitter style={{ color: '#1DA1F2' }} />
      <FaInstagram style={{ color: '#E1306C' }} />
      <FaYoutube style={{ color: '#FF0000' }} />
            </Flex>
            <Flex align="center" justify="center" gap="2rem" >
                <Button bg="blue.300" color="#fff" borderRadius="3rem" >Subscribe</Button>
                <Button bg="blue.300" color="#fff" borderRadius="3rem" >Message</Button>
            </Flex>
            
            <Flex align="center" justify="center" gap="2rem" >
                <Flex align="center" justify="center" >
                <CiHeart />
                <Text>60.4k</Text>
                </Flex>
                <Flex align="center" justify="center" >
                <CiChat1 />
                <Text>20k</Text>
                </Flex>
                <Flex align="center" justify="center" >
                <FaShare />
                <Text>12.14k</Text>
                </Flex>
            </Flex>
        </Flex>
  )
}

export default Card

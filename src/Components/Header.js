import { Text, Box, Heading,Flex,Button,AvatarGroup,Avatar,Image } from '@chakra-ui/react'
import React from 'react'


export default function Header({ title, head }) {


  return (
    <Box padding={'30px'} ms={{ base:'0px',md:'50px' }} >
      <Flex w={'100%'}  direction={["column", "row"]}>
  <Box w={{ base:'100%',md:'40%' }}>
        <Heading mb={4} fontSize={"50px"}>Fund Your Tech <br /> Startups In Crypto
      </Heading>  
     <Text fontSize={"20px"}>Find Backers who will bring your dream ideas into life.<br />
        Pitch, sell yourself, put your forward.  </Text>
   <Flex gap={5} display={["none", "flex"]} mt={8}>
   <Button  bg="#8054DE" color={"white"} >Launch project</Button>
   <Button colorScheme="#8054DE" variant='outline'color={"white"} >Explore more</Button>
    </Flex>

    <Flex  gap={5} display={["none", "flex"]} mt={8}>
      <Box>
        <Heading>100K+</Heading>
        <Text>Artwork</Text>
      </Box>
      <Box>
        <Heading>29K+</Heading>
        <Text>Participant</Text>
      </Box>
      <Box>
        <Heading>49K+</Heading>
        <Text>Ideas Funded</Text>
      </Box>
      <Box>
        <Heading>$51M</Heading>
        <Text>Raised Capital</Text>
      </Box>
    </Flex>

    <Box mt={8}>
    <Text >Top Investors</Text>
    <AvatarGroup size='md' max={6} mt={4}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />

</AvatarGroup>
    </Box>
     </Box>

     <Box w={{ base:'none',md:'60%' }}>
  <Image src='hero.png' alt='hero' objectFit={'cover'}/>
</Box>
      </Flex>   


  </Box>
  )
}
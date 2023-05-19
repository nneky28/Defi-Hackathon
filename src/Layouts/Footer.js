import { Box, Text, Flex, SimpleGrid, Center, Heading, Button, Image, HStack } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaTelegram,FaTwitter,FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const today = new Date()
  const emailAddress = 'cryptocrowdhack@gmail.com';
  return (
    <Box bg='#433478'
      p={10}
      px={10}
      color='#fff'>


      <Center >
        <Box w={{ base: '100%', md: '50%' }}>
          <Heading
            fontSize={"50px"}
            textAlign={'center'}
          >Do  you have any question?
            We are at your service
          </Heading>
        </Box>
      </Center>
      <Center>
      <a href={`mailto:${emailAddress}`}>
      <Button bg="#8054DE" color="white" mt={8}>
        Contact Us
      </Button>
    </a>
      </Center>
      <Box overflow='hidden' p="50px"ms={{ base:-12,md:-1 }} >
        <HStack w={{ base: '80%', md: '100%' }}>
          <Image src='logo.png' alt='logo' boxSize={'50px'} />
          <Box><Text fontSize={13}>CryptoCrowd</Text></Box>
        </HStack>  
      </Box>
      <Center>
      <SimpleGrid columns={{ base: 2 , md: 3 }} direction="row" spacing={{ base:'20px',md:'420px' }} >
          <Box>
            <Heading  fontSize='24px' mb={4}>Product</Heading>
            <Text fontSize='14px' >Features</Text>
            <Text fontSize='14px' mt={4}>Workload</Text>
            <Text fontSize='14px' mt={4}>Time</Text>
      
          </Box>
          <Box>
            <Heading fontSize='24px' mb={4}>Company</Heading>
            <Text fontSize='14px'>Real Work</Text>
            <Text fontSize='14px' mt={4}>About & Contact</Text>
            <Text fontSize='14px' mt={4}>Careers</Text>
         
          </Box>

          <Box>
            <Heading fontSize='24px' mb={4}>Resources</Heading>
            <Text fontSize='14px'>Blog</Text>
            <Text fontSize='14px' mt={4}>Help & About</Text>
            <Text fontSize='14px' mt={4}>Customer </Text>
          </Box>
        </SimpleGrid>
      </Center>

<SimpleGrid direction="row"mt={8}  columns={{ base: 2 , md: 3 }} ms={{ base:"12%",md:"4.5%" }} spacing={{ base:'20px',md:'330px' }}>
        <Text fontSize='12px'>&copy; 2023, All rights reserved.{today.getFullYear()}</Text>
        <HStack  >
              {/* <FaFacebookF/>
              <FaInstagram/>
              <FaLinkedinIn/>
              <FaTelegram/>
              <FaTwitter/>
              <FaDiscord/> */}

<a href="https://twitter.com/crypto_crowdt?s=21&t=Kfg7kTd3BkEJOA-Rfk5qig">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com/crypto_crowdt?s=21&t=Kfg7kTd3BkEJOA-Rfk5qig">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com">
        <FaLinkedinIn />
      </a>
      <a href="https://telegram.org">
        <FaTelegram />
      </a>
      <a href="https://twitter.com/crypto_crowdt?s=21&t=Kfg7kTd3BkEJOA-Rfk5qig">
        <FaTwitter />
      </a>
      <a href="https://discord.com">
        <FaDiscord />
      </a>

              </HStack>
        </SimpleGrid>

    </Box>
  )
}

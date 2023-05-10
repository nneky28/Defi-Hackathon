import React from 'react'
import {
    Box,
    Text,
    VStack,
    HStack,
    Flex,
    Image,
    Spacer
    
  } from "@chakra-ui/react";

export default function CrowdCard({color,title,description,name}) {
  return (
    <Box w={{ base: '100%', md: '25%' }} bgColor={"#433478"}  borderWidth='1px' borderRadius='lg' overflow='hidden' borderColor={'#F8F8FA'}
     p="10px" textAlign={"center"}>
        
  <Flex w={'100%'}>
    <HStack w={{base:'80%', md:'50%'}}>
  <Image
  borderRadius='full'
  boxSize='30px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>
<VStack>
<Box marginLeft={{ base:'0px',md:'-30%'}}><Text fontSize={12}>{name}</Text></Box>
<HStack>
<Image src='star.png' w={{ base: "12%", md: "7%" }}objectFit={'contain'}/>
  <Image src='star.png' w={{ base: "12%", md: "7%" }}objectFit={'contain'}/> 
  <Image src='star.png' w={{ base: "12%", md: "7%" }}objectFit={'contain'}/>
  <Image src='star.png' w={{ base: "12%", md: "7%" }}objectFit={'contain'}/>
   <Image src='star.png' w={{ base: "12%", md: "7%" }}objectFit={'contain'}/> 
</HStack>

</VStack>

</HStack>

<Spacer/>
<Box >
<Text fontSize={10}>4 days ago</Text>
</Box>
  </Flex>
    <Text fontSize={15}color={'#F8F8FA'}>{title}</Text>
    <Text mt={"3px"}fontSize={12} px={5}>"{description}"</Text>
    </Box>
   
   
  )
}

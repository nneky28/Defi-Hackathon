import React from 'react'
import {
    Box,
    Text,
    Center,
    HStack,
    Flex,
    Image,
    Spacer,
    Grid
    
  } from "@chakra-ui/react";

export default function CrowdCard({img,name}) {
  return (

<Box p={9}>
  <HStack w={{base:'80%', md:'100%'}}>
   <Image
  boxSize='50px'
  objectFit={'contain'}
    src={`${img}`}
   alt='icon'
 />
 <Box><Text fontSize={13}>{name}</Text></Box>
 </HStack>
</Box>
   
   
  )
}

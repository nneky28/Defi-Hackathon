import React from 'react'
import {
    Box,
    Text,
    HStack,
    Image,  
  } from "@chakra-ui/react";

export default function CrowdCard({img,name}) {
  return (

<Box p={{ base:3,md:9 }}>
  <HStack w={{base:'30%', md:'100%'}}>
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

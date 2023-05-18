import { Box,Heading,Image, Text } from '@chakra-ui/react'
import React from 'react'


export default function TeamCard({name,role,desc,img}) {
  return (
    <Box>
    <Image src={`${img}`}/>
       <Heading fontSize={'20px'} mt={3}>Name: {name} </Heading>
       <Heading fontSize={'20px'}  mt={2}>Skill or Role: {role}</Heading>
       <Heading fontSize={'20px'}  mt={2} mb={3}>Brief Description</Heading>
       <Text fontSize={'sm'} color='#FEFEFE'  mb={3}>{desc}</Text>
    </Box>
  )
}

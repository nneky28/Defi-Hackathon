import React from 'react'
import {
    Box,
    Text,
    Flex,
    UnorderedList,
    ListItem,
    Heading,
    Center
    
  } from "@chakra-ui/react";

export default function CrowdCard() {
  return (
 <Box w={{ base: '100%', md: '100%' }} overflow='hidden' p="20px" ms={[0,12]}
 marginTop={4}>
        
<Flex gap={'10%'}  direction={["column", "row"]}>
   
<Box w={{ base:'80%',md:'10%' }} marginLeft={{ base:'0px',md:"12%" }} >
<Box  borderWidth='2px' borderColor={'#FFC798'} w={'35%'}  marginTop={2} marginBottom={2}/>
<Heading fontSize={'20px'}>Types of project we are accepting</Heading>
</Box>

<Box w={{base:'100%',md:'46%' }}>
<UnorderedList >
  <ListItem fontSize={'sm'}>Our platform currently focuses on supporting tech start-ups that have already received seed funding and have progressed beyond the ideation phase. We believe that start-ups at this stage have a greater potential for success and a higher likelihood of delivering value to their customers and investors.
</ListItem>
  <ListItem fontSize={'sm'} marginTop={3} marginBottom={3}>By requiring seed funding, we aim to ensure that the start-ups we work with have a validated concept and have demonstrated the ability to attract investment. This allows us to focus our resources and support on start-ups that have a higher likelihood of success and are more likely to deliver returns for our investors.</ListItem>
  <ListItem fontSize={'sm'}>
While we appreciate the creativity and innovation that goes into ideating a new tech start-up, we believe that providing support at the seed funding stage can have a more significant impact on the start-up's success. This stage of development typically requires a high level of expertise, strategic guidance, and operational support, which we are best equipped to provide.</ListItem>

</UnorderedList>
</Box>
  </Flex>

  <Flex gap={'10%'}  direction={["column", "row"]}  marginTop={6}>
  <Box w={{ base:'80%',md:'10%' }} marginLeft={{ base:'0px',md:"12%" }} >
<Box  borderWidth='2px' borderColor={'#FFC798'} w={'35%'}  marginTop={2} marginBottom={2}/>
<Heading fontSize={'20px'}>Possible requirement to be aware of</Heading>
</Box>

<Box w={{base:'100%',md:'46%' }}>
<UnorderedList >
  <ListItem fontSize={'sm'}>The project must be functional</ListItem>
  <ListItem fontSize={'sm'} marginTop={3} marginBottom={3}>Must already have a community or a group of clients</ListItem>
  <ListItem fontSize={'sm'} marginTop={3} marginBottom={3}>Must have a received a seed funding </ListItem>
  <ListItem fontSize={'sm'}>Must have passed the ideation stage</ListItem>
</UnorderedList>
</Box>
  </Flex>

  <Flex gap={'10%'}  direction={["column", "row"]}  marginTop={6}>
  <Box w={{ base:'80%',md:'10%' }} marginLeft={{ base:'0px',md:"12%" }} >
<Box  borderWidth='2px' borderColor={'#FFC798'} w={'35%'}  marginTop={2} marginBottom={2}/>
<Heading fontSize={'20px'}>Caveat you should know</Heading>
</Box>

<Box w={{base:'100%',md:'46%' }}>
<UnorderedList >
  <ListItem fontSize={'sm'}>10% of your cryptocurrency will be allocated to the CryptoCrowd platform from your investment

</ListItem>
</UnorderedList>
</Box>
  </Flex>

 </Box>
   
   
  )
}

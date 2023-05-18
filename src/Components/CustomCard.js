import { Box,
    Flex,
    Heading,
    Image,
    ListItem,
    UnorderedList,
 } from '@chakra-ui/react'
import React from 'react'


export default function Customcard({list1,title,img,list2,list3,list4,list5}) {
  return (
    <Box>
 <Flex justify={'space-between'} gap={5}>
<Box w={"40%"}>
<Image src={`${img}`}/>
</Box>
 <Box w={"55%"}>
    <Heading fontSize={'20px'} mb={4} ms={3}>{title}</Heading>
    <UnorderedList color={'#F8F8FA'} fontSize={'12px'} fontWeight={300} lineHeight={6}>
  <ListItem >{list1}</ListItem>
  <ListItem mt={4}>{list2}</ListItem>
  <ListItem mt={4}>{list3}</ListItem>
  <ListItem mt={4}>{list4}</ListItem>
  <ListItem mt={4}>{list5}</ListItem>
</UnorderedList>
 </Box>
 </Flex>
    </Box>
  )
}

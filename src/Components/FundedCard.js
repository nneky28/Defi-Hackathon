import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Center,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';



export default function FundedCard({ title, description, icon, value, funds, ongoing, link = false,onClick = () => {}, }) {
  const history = useNavigate();
  return (
    <Box w={{ base: '100%', md: '25%' }} bgColor={"#433478"} borderWidth='1px' borderRadius='lg' overflow='hidden' borderColor={'#F8F8FA'}
    >

      <Center>
        <Center color={"white"}>
          <Image src={`${icon}`}
            objectFit={'contain'} />
        </Center>
      </Center>
      <Box p='13px'>

        <Text fontSize='lg' pt={"8px"} >{title}</Text>
        {funds ? <Text color='#FFC798' fontSize={12} paddingBottom={3}>003 ETH</Text> :
          // Button from facebook.com
          <Box
            as='button'
            height='24px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='1px'
            px='8px'
            borderRadius='50px'
            fontSize='14px'
            fontWeight='semibold'
            bg='#f5f6f7'
            borderColor='#ccd0d5'
            color='#4b4f56'
            _hover={{ bg: '#ebedf0' }}
            _active={{
              bg: '#dddfe2',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
            }}
            _focus={{
              boxShadow:
                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            mb={2}
            onClick={() => {
              link ? history(link) : onClick();
            }}
          >
            ongoing
          </Box>}
        <Image src='line1.png' />
        <Text fontSize='xs' pt={"3px"} color={'#F8F8FA'} paddingTop={3}>{description}</Text>
        <Flex gap='3' direction={['row', 'row']} paddingTop={3}>
          <Text color='#FFC798' fontSize={12} >Total raised</Text>
          <Image src='line1.png' objectFit={'contain'} w={'35%'} />
          <Text fontSize={12}>$1,231,004</Text>
        </Flex>

        <Flex gap='3' direction={['row', 'row']} paddingTop={3}>
          <Text color='#FFC798' fontSize={12} >{funds ? 'Participants' : "Fundraising goal"}</Text>
          <Image src='line1.png' objectFit={'contain'} w={'35%'} />
          <Text fontSize={12}>127</Text>
        </Flex>
        {
          ongoing &&
          <Flex gap='150' direction={['row', 'row']} paddingTop={3}>
            <Text color='#FFC798' fontSize={12} >Starting Date</Text>
            <Text fontSize={12}>June 7</Text>
          </Flex>
        }
      </Box>
      {
        funds &&

        <Box background={'#160736'} p={2}>
          <Text textAlign={'center'} fontSize={12} >Token Sales</Text>
        </Box>
      }
    </Box>


  )
}

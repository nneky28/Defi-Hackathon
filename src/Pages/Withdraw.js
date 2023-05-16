import {
    Box, Heading, Center, Text, Input, Button, FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react'
import React from 'react'
import NavBar from '../Layouts/NavBar'
import Footer from '../Layouts/Footer'



export default function Withdraw({ name, role, desc, img }) {

    return (
        <Box h="auto" bgGradient='linear(to top left, #191E31 50%,#8054DE 200%)' color='#fffff' overflow={'hidden'} w='auto'>
            <NavBar />
            <Center p={'50px'}>
                <Heading fontSize={'40px'} >
                    Withdraw
                </Heading>
            </Center>
            <Center>
                <Heading fontSize={'30px'} >
                    RoboWorks
                </Heading>
            </Center>
            <Center p={'10px'}>
                <Text fontSize={'18px'}> Your withdrawal balance is <span style={{ color: '#FFC798' }}>$150,491,562</span> </Text>
            </Center>

            <Center>
                <Text>To withdraw fill out the form below</Text>
            </Center>
            <Center>
                <FormControl w={{ base:'100%',md:'40%' }} p={10}>
                    <FormLabel fontSize={'20px'}>Cryptocurrency address</FormLabel>
                    <Input type='default' placeholder='Enter your Cryptocurrency address' bg={'#E6DDF8'} color={'black'} _placeholder={{ color: 'black' }} h={14} />

                    <FormLabel fontSize={'20px'} mt={5}>Wallet address</FormLabel>
                    <Input type='default' placeholder='Enter your Wallet address' bg={'#E6DDF8'} color={'black'} _placeholder={{ color: 'black' }} h={14} />


                    <FormLabel fontSize={'20px'} mt={5}>Enter amount</FormLabel>
                    <Input type='default' placeholder='Enter the amount you want to withdraw' bg={'#E6DDF8'} color={'black'} _placeholder={{ color: 'black' }} h={14} />

                    <FormLabel fontSize={'20px'} mt={5}>Withdrawal method</FormLabel>
                    <Select placeholder='Select country' bg={'#E6DDF8'} color='black' h={14} w={['55%', '50%', '100%']} >
                        <option style={{base:"20%" }}>transfer</option>
                        <option>Coupons</option>
                    </Select>
                </FormControl>

            </Center>
            <Center>
                <Button w={{ base:'78%',md:'34%' }} bg='#433478' mb={{ base:5,md:40 }} p={6}>Withdraw</Button>
            </Center>
            <Footer />
        </Box>
    )
}

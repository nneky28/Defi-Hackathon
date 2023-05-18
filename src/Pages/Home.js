import React, { useState } from "react";
import {
  Box,
  Center,
  Text,
  Heading,
  Flex,
  Image,
  SimpleGrid,
  Grid
} from "@chakra-ui/react";
import NavBar from "../Layouts/NavBar";
import Footer from "../Layouts/Footer";
import Header from "../Components/Header";
import CrowdCard from "../Components/CrowdCard";
import FundedCard from "../Components/FundedCard";
import Projects from "../Components/Projects"
import Sponsor from '../Components/Sponsors'
import projects from "../Utils/Dummydata";
import { Link } from 'react-router-dom';


export default function Home() {
  // const cards = Array.from({ length: 4 }, (v, i) => i);
  const [data] = useState(projects)
 
  const team = [
    {
      img: 'celo.png',
      name: 'Celo',

    },

    {
      img: 'eth.png',
      name: 'Ethereum',

    },

    {
      img: 'cardano.png',
      name: 'Cardano',

    },
  ]

  const partners = [
    {
      img: 'celo.png',
      name: 'Celo',

    },

    {
      img: 'web3.png',
      name: 'Web3Ladies',

    },


  ]

  return (
    <Box h="auto" bgGradient='linear(to top left, #191E31 50%,#8054DE 300%)' color='#fffff' overflow={'hidden'} w='auto'>
      <NavBar home/>
      <Header />
      <Box mt={8} color='white'>
        <Center mb={1} >
          <Heading size={{ md: '2xl', base: '1xl' }} color='white'>Why Cryptocrowd</Heading>
        </Center>
        <Center>
          <Image src="line.png" alt="line" w={{ base: "30%", md: "10%" }} />
        </Center>
        <Text marginTop={3} textAlign="center" fontSize={{ base: "12px", md: "18px" }}>
          We help you bring your projects and ideas to live
        </Text>

        <Flex
          ms={{ base: '10px', md: '10px' }}
          direction={["column", "row"]}
          marginTop={2}

          padding={{ base: "10px", md: "50px" }}
        >
          <Center>
            <Box w={{ base: '100%', md: '30%' }}>

              <Box
                as='button'
                p={{ base: 1, md: 1 }}
                height='24px'
                color='white'
                fontWeight='bold'
                borderRadius='50px'
                fontSize='12px'
                bg={'#8054DE'}
                justify='center'
                bgGradient='linear(to-r, teal.500, green.500)'
                _hover={{
                  bgGradient: 'linear(to-r, red.500, yellow.500)',
                }}
              >
                why cryptocrowd
              </Box>
              <Box w={{ base: '100%', md: '60%' }}>
                <Text>We make your tech startup dreams become a reality. Take action now to shape the future and make it a reality.</Text>
              </Box>
            </Box>
            <Box w={{ base: '100%', md: '50%' }} marginLeft={{ base: '0px', md: "12%" }}>
              <Box w={{ base: '80%', md: '20%' }} marginLeft={{ base: '0px', md: "12%" }}>
                <Box borderWidth='1px' borderColor={'#FFC798'} w={'35%'} marginTop={2} marginBottom={2} />
                <Text fontSize={'12px'}>Premium Security for you</Text>
              </Box>

              <Box w={{ base: '80%', md: '20%' }} marginLeft={{ base: '0px', md: "12%" }} mt={6} >
                <Box borderWidth='1px' borderColor={'#FFC798'} w={'35%'} marginTop={2} marginBottom={2} />
                <Text fontSize={'12px'}>Fund cutting-end</Text>
              </Box>

              <Box w={{ base: '80%', md: '20%' }} marginLeft={{ base: '0px', md: "12%" }} mt={6} >
                <Box borderWidth='1px' borderColor={'#FFC798'} w={'35%'} marginTop={2} marginBottom={2} />
                <Text fontSize={'12px'}>Fund and launch
                  your start-up</Text>
              </Box>
            </Box>

            <Box w={{ base: '100%', md: '20%' }}>
              <Text fontSize={'12px'}>We host data on distributed network,and without the need for traditional financial intermediaries.’</Text>
              <Text fontSize={'12px'} mt={6}>We give you the chance to showcase your tech startup projects publicly to enable you
                meet your goals.</Text>
              <Text fontSize={'12px'} mt={6}>We help tech startups to get funds that enable them to launch projects</Text>
            </Box>

          </Center>
        </Flex>
      </Box>
      <Box mt={10} color='white'>
        <Center mb={1}>
          <Heading size={{ md: '2xl', base: '1xl' }}>Funded Projects</Heading>
        </Center>
        <Center>
          <Image src="line.png" alt="line" w={{ base: "30%", md: "10%" }} />
        </Center>
        <Text marginTop={3} textAlign="center" fontSize={{ base: "12px", md: "18px" }}>
          Successful projects that have been funded through the platform
        </Text>

        <Flex
          gap="3"
          justifyContent="center"
          direction={["column", "row"]}
          marginTop={2}
          padding={{ base: "20px", md: "0px" }}
        >
          <FundedCard
            icon={"hive.png"}
            title="TechHive"
            Value="003"
            description="A start-up that creates cutting-edge software 
             data analysis and automation."
            funds
          />
          <FundedCard
            icon={"security.png"}
            title="SecureWeb"
            Value="003"
            description="A start-up that creates cutting-edge software 
            for data analysis and automation."
            funds
          />
          <FundedCard
            icon={"brain.png"}
            title="BrainWave"
            Value="003"
            description="A start-up that creates cutting-edge software 
            for data analysis and automation."
            funds
          />
        </Flex>
        <Flex
          gap="3"
          justifyContent="center"
          direction={["column", "row"]}
          marginTop={{ base: 0, md: 2 }}
          padding={{ base: "20px", md: "0px" }}
          funds
        >
          <FundedCard
            icon={"code.png"}
            title="CodeCraft "
            Value="003"
            description="A start-up that creates cutting-edge software 
            for data analysis and automation."
            funds
          />
          <FundedCard
            icon={"leap.png"}
            title="Quantum Leap"
            Value="003"
            description="A start-up that creates cutting-edge software 
            for data analysis and automation."
            funds
          />
          <FundedCard
            title="CloudLap"
            Value="003"
            icon={"cloud.png"}
            description="A start-up that creates cutting-edge software 
            for data analysis and automation."
            funds
          />
        </Flex>
      </Box>

      <Box mt={10} color='white'>
        <Center mb={1}>
          <Heading size={{ md: '2xl', base: '1xl' }}>Testimonials</Heading>
        </Center>
        <Center>
          <Image src="line.png" alt="line" w={{ base: "30%", md: "10%" }} />
        </Center>
        <Text marginTop={3} textAlign="center" fontSize={{ base: "12px", md: "18px" }}>
          Hear from the horses mouth and be inspired
        </Text>

        <Flex
          gap="3"
          justifyContent="center"
          direction={["column", "row"]}
          marginTop={2}
          padding={{ base: "20px", md: "0px" }}
        >
          <CrowdCard
            name="Darrell Steward"
            title="Just the support I needed"
            color="#2c98f0"
            // icon={<AiOutlineBulb />}
            description="As a first-time entrepreneur, I was unsure 
            of how to navigate the tech startup world. 
            Luckily, this website provided me with all 
            the support I needed to get my business
            off the ground. Their resources and 
            advice were invaluable, and I couldn't have
            done it without them."
          />

          <CrowdCard
            name="Jane Cooper"
            title="I’m glad I found this website"
            color="#2c98f0"
            // icon={<AiOutlineBulb />}
            description="I had an idea for a tech startup, but I had no idea where to begin. Thankfully, I found this website, and their team helped me turn my idea into a reality. With their expert guidance and support, my startup is now thriving, and I couldn't be happier."
          />
          <CrowdCard
            name="Brooklyn Woods"
            title="Launching made easy"
            color="#2c98f0"
            // icon={<AiOutlineBulb />}
            description=" Launching a tech startup is a daunting task, but this website made the process much easier. Their user-friendly platform andhelpful resources gave me the tools I needed to succeed. Thanks to them, my startup is now making waves in the tech industry."
          />
        </Flex>
      </Box>
      <Box mt={10} color='white'>
        <Center mb={1}>
          <Heading size={{ md: '2xl', base: '1xl' }}>Ongoing Projects</Heading>
        </Center>
        <Center>
          <Image src="line.png" alt="line" w={{ base: "30%", md: "10%" }} />
        </Center>
        <Text marginTop={3} textAlign="center" fontSize={{ base: "12px", md: "18px" }}>
          List of ongoing projects to invest in
        </Text>

        <Link to='/details'>
        <Flex
          gap="3"
          flexWrap="wrap"
          justifyContent="center"
          direction={["column", "row"]}
          marginTop={3}
          padding={{ base: "20px", md: "0px" }}  >

          {
            data.map((item, key) => (

              <FundedCard
                key={key}
                {...item}
                ongoing
              />

            ))
          }
        </Flex>
       </Link>
      </Box>

      <Box mt={10} color='white'>
        <Center mb={1}>
          <Heading size={{ md: '2xl', base: '1xl' }}>Projects, Restrictions and Caveat</Heading>
        </Center>
        <Center>
          <Image src="line.png" alt="line" w={{ base: "30%", md: "10%" }} />
        </Center>
        <Text marginTop={3} textAlign="center" fontSize={{ base: "12px", md: "18px" }}>
          Find more information about projects, restrictions and caveat
        </Text>

        <Center>
          <Projects />
        </Center>

      </Box>


      <Box mt={10} color='white'>
        <Center mb={1}>
          <Heading size={{ md: '2xl', base: '1xl' }}>Cryptocurrency Token </Heading>
        </Center>
        <Center>
          <Image src="line.png" alt="line" w={{ base: "30%", md: "10%" }} />
        </Center>
        <Text marginTop={3} textAlign="center" fontSize={{ base: "12px", md: "18px" }}>
          Cryptocurrency tokens the platform accepts
        </Text>


        <Center mt={4}>
          <SimpleGrid columns={[3, 3]} direction="row" spacing={{ base: 0, md: 12 }} >

            {
              team.map((item, key) => (
                <Sponsor
                  key={key}
                  {...item}
                />
              ))
            }
          </SimpleGrid>
        </Center>
      </Box>

      <Box mt={10} color='white'>
        <Center mb={1}>
          <Heading size={{ md: '2xl', base: '1xl' }}>Our Partners</Heading>
        </Center>
        <Center>
          <Image src="line.png" alt="line" w={{ base: "30%", md: "10%" }} />
        </Center>
        <Text marginTop={3} textAlign="center" fontSize={{ base: "12px", md: "18px" }}>
          Meet our well renowned and regonised partners
        </Text>


        <Center mt={4}>
          <SimpleGrid columns={[2, 2]} direction="row" spacing={{ base: 0, md: 12 }} >

            {
              partners.map((item, key) => (
                <Sponsor
                  key={key}
                  {...item}
                />
              ))
            }
          </SimpleGrid>
        </Center>
      </Box>

      <Footer />
    </Box>
  );
}

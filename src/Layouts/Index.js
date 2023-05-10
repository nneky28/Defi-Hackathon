import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import {
  Box,
  Center,
  Container,
  HStack,
  Image,
  LinkBox,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function MainLayout({ children, home = false, about = false, service = false, skill = false, education = false, experience = false, work = false, contact = false, bgColor = "white" }) {
  return (
    <Container maxW={"container.xl"}>
      <Stack align={"flex-start"} pos={"relative"} direction={{base: "columns", md: "columns", lg: "row"}} justifyContent={'center'} >

        <Box visibility={{ base: "hidden", md: "hidden", lg: "visible" }}  >
          <NavBar home={home} about={about} service={service} skill={skill} education={education} experience={experience} work={work} contact={contact} />
        </Box>


        <Box pl={{ base: "0px", md: "320px" }} width={'100%'}>

          {children}
        </Box>





      </Stack>



    </Container>

  )
}

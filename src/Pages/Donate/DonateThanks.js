import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Layouts/Footer";
import NavBar from "../../Layouts/NavBar";
import { Box, Heading, Center, Text, Image, Button } from "@chakra-ui/react";

export function DonateThanks() {
  return (
    <Box
      w="100%"
      h="auto"
      bgGradient="linear(to top left, #191E31 50%,#8054DE 300%)"
      color="white"
    >
      <NavBar />
      <Box>
        <Center>
          <Heading>Thank you for supporting the community</Heading>
        </Center>
        <Center>
          <Link to="/">
            <Button bg="#8054DE" color={"white"}>
              Go Home
            </Button>
          </Link>
        </Center>
        <Center>
          <Image src="thanks.png" alt="line" w={{ base: "10%", md: "60%" }} />
        </Center>
      </Box>
      <Footer />
    </Box>
  );
}

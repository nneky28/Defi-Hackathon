import {
  Box,
  Heading,
  Center,
  HStack,
  Text,
  Image,
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import "./CreateProject.css";
import Footer from "../../Layouts/Footer";

export function CreateProject({ name, role, desc, img }) {
  return (
    <Box
      w="100%"
      h="auto"
      bgGradient="linear(to top left, #191E31 50%,#8054DE 300%)"
      color="white"
    >
      <div className="Donate--Container">
        <nav className="NavBar">
          <div className="crypto">
            <HStack>
              <Image src="logo.png" alt="logo" boxSize={"38px"} />
              <Text
                fontSize="15px"
                fontWeight={"700"}
                fontFamily="body"
                color={"#fff"}
              >
                CryptoCrowd
              </Text>
            </HStack>
          </div>

          <div className="walletConnect">
            <ConnectButton className="wallet" chainStatus="name" />
          </div>
        </nav>
      </div>

      <Box
        h="auto"
        bgGradient="linear(to top left, #191E31 50%,#8054DE 200%)"
        color="white"
        overflow={"hidden"}
        w="auto"
      >
        <Center pt={"100px"}>
          <Heading fontSize={"40px"}>PROJECT CREATION</Heading>
        </Center>
        <Center>
          <Image src="line.png" alt="line" w={{ base: "10%", md: "5%" }} />
        </Center>
        <Center p={"12px"}>
          <Text fontSize={"18px"}>
            Create a new project by filling out the form below
          </Text>
        </Center>

        <Center>
          <FormControl w={{ base: "100%", md: "40%" }} p={10}>
            <FormLabel fontSize={"20px"}>Project Title</FormLabel>
            <Input
              type="default"
              placeholder="A catchy and descriptive name for your project"
              bg={"#E6DDF8"}
              color={"black"}
              _placeholder={{ color: "black" }}
              h={14}
            />

            <FormLabel fontSize={"20px"} mt={5}>
              Project description
            </FormLabel>
            <Input
              type="default"
              placeholder="Detail explanation of your project and how investors will benefit"
              bg={"#E6DDF8"}
              color={"black"}
              _placeholder={{ color: "black" }}
              h={14}
            />

            <FormLabel fontSize={"20px"} mt={5}>
              Funding goals
            </FormLabel>
            <Input
              type="default"
              placeholder="Specify the amount of funded needed to complete the project"
              bg={"#E6DDF8"}
              color={"black"}
              _placeholder={{ color: "black" }}
              h={14}
            />

            <FormLabel fontSize={"20px"} mt={5}>
              Project timeline
            </FormLabel>
            <Input
              type="default"
              placeholder="Duration needed to complete the project with deadlines and milestones"
              bg={"#E6DDF8"}
              color={"black"}
              _placeholder={{ color: "black" }}
              h={14}
            />
          </FormControl>
        </Center>
        <Center pb="100">
          <Button
            w={{ base: "78%", md: "34%" }}
            bg="#8054DE"
            mb={{ base: 5, md: 100 }}
            p={6}
          >
            Create a Project
          </Button>
        </Center>
        <Footer />
      </Box>
    </Box>
  );
}

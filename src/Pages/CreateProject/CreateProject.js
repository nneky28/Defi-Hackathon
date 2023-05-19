// 

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
import React, { useState } from "react";
import "./CreateProject.css";
import NavBar from "../../Layouts/NavBar";
import Footer from "../../Layouts/Footer";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { token } from "../../Components/Contract";
import { useHistory } from "react-router-dom";

export function CreateProject({ name, role, desc, img }) {
  const [_title, setTitle] = useState("");
  const [_description, setDescription] = useState("");
  const [_target, setTarget] = useState("");
  const [_deadline, setDeadline] = useState("");

  const { config } = usePrepareContractWrite({
    address: token.address,
    abi: token.abi,
    functionName: "createCampaign",
    args: [
      _title,
      _description,
      !isNaN(parseInt(_target)) ? parseInt(_target) : 0,
      !isNaN(parseInt(_deadline)) ? parseInt(_deadline) : 0,
    ],
    gasLimit: 50000,
  });

  const {
    data: writeData,
    isLoading: writeLoading,
    isSuccess,
    write,
  } = useContractWrite(config);

  const handleChange = (e) => {
    e.preventDefault();
    write?.();
    setTitle("");
    setDescription("");
    setTarget("");
    setDeadline("");
    // Redirect to a new page after form submission
    window.location.href = "/"; // Replace "/new-page" with the actual path of the new page
  };

  return (
    <Box
      w="100%"
      h="auto"
      bgGradient="linear(to top left, #191E31 50%,#8054DE 300%)"
      color="white"
    >
      {/*<div className="Donate--Container">
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
      </div>*/}
      <NavBar />
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
              id="_title"
              onChange={(e) => setTitle(e.target.value)}
              value={_title}
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
              id="_description"
              onChange={(e) => setDescription(e.target.value)}
              value={_description}
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
              id="_target"
              onChange={(e) => setTarget(e.target.value)}
              value={_target}
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
              id="_deadline"
              onChange={(e) => setDeadline(e.target.value)}
              value={_deadline}
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
            type="submit"
            w={{ base: "78%", md: "34%" }}
            bg="#8054DE"
            mb={{ base: 5, md: 100 }}
            p={6}
            onClick={handleChange}
          >
            {writeLoading ? "Submiting" : "Create a Project"}
          </Button>
        </Center>
        <Footer />
      </Box>
    </Box>
  );
}
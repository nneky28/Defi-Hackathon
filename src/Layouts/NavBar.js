import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Box,
  Flex,
  Text,
  Spacer,
  Button,
  Image,
  HStack,
} from "@chakra-ui/react";
import { RiSearch2Line, RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Flex padding={"50px"} gap={5} display={["none", "flex"]} ms={"30px"}>
      <Link to="/">
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
      </Link>
      <Link to="/">
        {" "}
        <Text fontSize="15px" p={2}>
          Discover
        </Text>
      </Link>
      <Link to="/about">
        {" "}
        <Text p={2} fontSize="15px">
          Explore
        </Text>
      </Link>
      <Link to="/">
        <Text p={2} fontSize="15px">
          Contact us
        </Text>
      </Link>
      <Link to="/">
        <Text p={2} fontSize="15px">
          Sign Up
        </Text>
      </Link>
      <Link to="/">
        <Text p={2} fontSize="15px">
          Sign In
        </Text>
      </Link>
      {/* <Spacer /> */}

      <Flex gap={5} textTransform="uppercase" ms={"25%"}>
        <Flex gap={5}>
          <Box fontSize={"30px"} pos="relative" top="4px">
            <RiSearch2Line />
          </Box>
          <ConnectButton className="wallet" chainStatus="name" />
          <Box fontSize={"30px"} pos="relative" top="4px">
            <RiMenuLine />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

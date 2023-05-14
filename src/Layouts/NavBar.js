import React from "react";
import { Box, Flex, Text,
   Button, Image, HStack,
   useDisclosure,
   Drawer,
   DrawerBody,
 Spacer,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   } from "@chakra-ui/react";
import { RiSearch2Line, RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";


export default function NavBar({home}) {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Flex padding={"40px"} gap={5} display={["none", "flex"]} ms={'40px'}>
        <Link to="/">
          <HStack>
            <Image src='logo.png' alt='logo' boxSize={'38px'} />
            <Text fontSize="15px"
              fontWeight={"700"}
              fontFamily="body"
              color={"#fff"}>CryptoCrowd</Text>
          </HStack>
        </Link>
        <Link to="/">
          {" "}
          <Text fontSize="15px" p={2}>Discover</Text>
        </Link>
        <Link to="/about">
          {" "}
          <Text p={2} fontSize="15px">Expore</Text>
        </Link>
        <Link to="/">
          <Text p={2} fontSize="15px">Contact us</Text>
        </Link>
     {
      home &&   
      <>
       <Link to="/">
      <Text p={2} fontSize="15px">Sign Up</Text>
    </Link>
    <Link to="/">
      <Text p={2} fontSize="15px">Sign In</Text>
    </Link>
      </>
     }
        <Spacer />

        <Flex gap={5} textTransform="uppercase" ms={'25%'}>
          <Flex gap={5}>
           {
            home &&
            <Box fontSize={"30px"} pos="relative" top="4px">
            <RiSearch2Line />
          </Box>
           }
            <Link to="/reg">
              <Button background="#8054DE">Connect Wallet</Button>
            </Link>
           {
            home &&
            <Box fontSize={"30px"} pos="relative" top="4px">
            <RiMenuLine />
          </Box>
           }
          </Flex>
        </Flex>
      </Flex>
      <Flex px={"20px"}  display={["flex", "none"]}  justify={'space-between'} pt={5}>
        <Link to="/">
          <HStack>
            <Image src='logo.png' alt='logo' boxSize={'38px'} />
          </HStack>
        </Link>

     {
      home &&
      <Box fontSize={"30px"} pos="relative" top="4px" onClick={onOpen}>
      <RiMenuLine />  
    </Box>
     }
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt={8}>
          <Link to="/">
          {" "}
          <Text fontSize="15px" p={2}>Discover</Text>
        </Link>
        <Link to="/about">
          {" "}
          <Text p={2} fontSize="15px">Expore</Text>
        </Link>
        <Link to="/">
          <Text p={2} fontSize="15px">Contact us</Text>
        </Link>
        <Link to="/">
          <Text p={2} fontSize="15px">Sign Up</Text>
        </Link>
        <Link to="/">
          <Text p={2} fontSize="15px">Sign In</Text>
        </Link>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  );
}

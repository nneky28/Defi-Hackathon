import React from "react";
import {
  Box, Flex, Text,
  Button, Image, HStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  Spacer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Heading,
  Center,
  Select
} from "@chakra-ui/react";
import { RiSearch2Line, RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";


export default function NavBar({ home }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = React.useState('');

  return (
    <>
      <Flex padding={"40px"} gap={5} display={["none", "flex"]} ms={'5px'} color='white'>
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
        </Link>
        <Text p={2} fontSize="15px">Expore</Text>
        {
          home &&
          <>
            <Text as='button' onClick={onModalOpen} p={2} fontSize="15px">Sign Up</Text>
            <Text as='button' onClick={onModalOpen} p={2} fontSize="15px">Sign In</Text>
          </>
        }
        <Spacer />

        <Flex gap={5} textTransform="uppercase" ms={'25%'} color='white'>
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
      <Flex px={"20px"} display={["flex", "none"]} justify={'space-between'} pt={5}>
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
        home
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt={8}>
            <Link to="/about">
              {" "}
              <Text p={2} fontSize="15px">Expore</Text>
            </Link>
            <Text as='button' onClick={onModalOpen} p={2} fontSize="15px">Sign Up</Text><br/>
            {" "}
            <Text as='button' onClick={onModalOpen} p={2} fontSize="15px">Sign In</Text>
          </DrawerBody>

        </DrawerContent>
      </Drawer>

      <>
        <Modal isOpen={isModalOpen} onClose={onModalClose} closeOnOverlayClick={false} >
          <ModalOverlay />
          <ModalContent>
            {/* <ModalCloseButton /> */}
            <ModalBody p={'12px'}>
              <Center>
                <Heading fontSize='24px' w={'50%'}>How would you</Heading>
              </Center>
              <Center>
                <Heading fontSize='23px' w={'50%'} ms={{ base: 0, md: 5 }}>like to sign up</Heading>
              </Center>

              <Box p={5}>
                <Select placeholder='Sign up as an investor or a start techup'
                 borderColor="purple"
                 onChange={(e) => setSelectedOption(e.target.value)}
          
                 >
                  <option value='option1'>StartUp</option>
                  <option value='option2'>Investor</option>
                </Select>
              </Box>

              <Center>
  <Flex p={3} gap={10}>
    <Text as='button' onClick={onModalClose}>Cancel</Text>
    {selectedOption === 'option1' ? (
      <Link to="/SignUp">
        <Button background="#8054DE" color="#ffff">Continue</Button>
      </Link>
    ) : (
      <Link to="/InvestSignUp">
        <Button background="#8054DE" color="#ffff">Continue</Button>
      </Link>
    )}
  </Flex>
</Center>

            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </>
  );
}

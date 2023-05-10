import React, { useEffect, useRef } from 'react'
import {

  LinkBox,
  Text,
  useDisclosure,
 useColorModeValue
} from "@chakra-ui/react";
import {useNavigate } from 'react-router-dom';

export default function LinkMenu({ link, active, title, Close, }) {


  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nav = () => {
    window.location.href = link
  }


  const NavColor = useColorModeValue(active ? "blue.blue500" : "gray.gray500", active ? "blue.blue500" : "white" )

  return (
    <LinkBox onClick={nav} as={"a"} cursor={"pointer"}>
      <Text color={NavColor} _hover={{ color: "blue.blue500", borderBottom: "2px solid red.red500" }} >{title}</Text>

    </LinkBox>
  )
}

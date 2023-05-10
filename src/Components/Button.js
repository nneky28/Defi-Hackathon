import { Button as ButtonBox } from '@chakra-ui/button';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom';

export default function Button({
  children,
  onClick = () => {},
  isLoading = false,
  link = false,
  isSubmit = false,
  size = 'md',
  disabled = false,
  full = false,
  background = 'orange.orange500',
  color = '#fff',
  border,
  leftIcon,
  rightIcon,
  href
}) {

  const history = useNavigate();
 

  return (
    <ButtonBox
      fontSize={size === 'xs' ? 'xs' : size === 'sm' ? 'sm' : '16px'}
      fontWeight={'700'}
      color={color}
      bg={background}
      border={border}
      transition= "0.5s"
      _hover={{
        bg: "background",
        color: "black"
      }}
      _active={{
        bg: background,
      }}
      rounded="0px"
      size={size}
      as="button"
      onClick={() => {
        link ? history(link) : onClick();
      }}
      
      isLoading={isLoading}
      loadingText="Please wait . . ."
      type={isSubmit ? 'submit' : 'button'}
      disabled={isLoading || disabled}
      w={'100%'}
      px="32px"
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
    <Box as = "a" href={href}>
    {children}
    </Box>
     
    </ButtonBox>
  );
}

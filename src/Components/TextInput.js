import { FormControl, FormLabel, Textarea, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';

export default function TextInput({ id = '',
label = '',
val = false,
isRequired = false,
type = 'email',
readOnly = false,
helper = null,
onChange = null,
isDisabled = false,
size = 'lg',
placeholder = `Enter ${label.toLowerCase()}`,
pl = 0,
rightIcon = null,
...rest
}) {
    const [active, setActive] = useState(rest.value);
  
    const [inputType, setInputType] = useState(type);

    const bg = useColorModeValue("#fff", "#1A202C")
    const colorT = useColorModeValue("gray.gray300", "#fff")
    const focusColor = useColorModeValue("blue.blue500", "teal")
  return (
    <FormControl 
    id={id}
    isReadOnly={readOnly}
    isDisabled={isDisabled}
    isRequired={isRequired}
    pos="relative"
    >
        <FormLabel
        pos="absolute"
        transform={`translateY(${active || val ? '-85px' : "-67px"}) translateX(15px)`}
        bottom={'3'}
        zIndex="10"
        fontSize={active ? 'xs' : 'sm'}
        fontWeight="300"
        color={colorT}
        bg={bg}
        px="4px"
        >
            {label}
        </FormLabel>

        <Textarea
        onChange={onChange}
        rows="5"
        {...rest}
        placeholder={active || !label ? placeholder : ''}
        type={inputType}
        focusBorderColor={'blue.blue500'}
        _focus={{ borderColor: focusColor}}
        size={size}
        fontSize="sm"
        fontWeight={'300'}
        rounded="8px"
        onFocus={() => setActive(true)}
        onBlur={() => {
          if (!rest.value) {
            setActive(false);
          }
        }}
        resize="none"
        >

        </Textarea>
    </FormControl>
  )
}

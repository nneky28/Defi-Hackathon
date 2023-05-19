import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  Stack,
  Input,
  FormControl,
  FormLabel,
  Center,
  useDisclosure,
} from "@chakra-ui/react";

export default function DonateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xl"];

  return (
    <>
      {/* {sizes.map((size) => (
        <Button
          onClick={() => handleSizeClick(size)}
          m={4}
          style={{ backgroundColor: "rgb(128, 84, 222)", color: "white" }}
        >
          Donate
        </Button>
      ))} */}

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader>Donate</ModalHeader>
          </Center>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Stack spacing={4}>
                <FormLabel fontSize={"20px"} mt={5}>
                  Amount
                </FormLabel>
                <Input
                  type="default"
                  placeholder="0.0"
                  bg={"white"}
                  color={"black"}
                  _placeholder={{ color: "black" }}
                  h={14}
                  textAlign="left"
                />
              </Stack>
            </Center>
            <Center>
              <Button
                style={{ backgroundColor: "rgb(128, 84, 222)", color: "white" }}
                mt={"10px"}
              >
                Donate
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

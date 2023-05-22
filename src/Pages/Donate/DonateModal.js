import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Select,
  Input,
  Center,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { token } from "../../Components/Contract";

export default function DonateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const [_id, setId] = useState("");

  const { config } = usePrepareContractWrite({
    address: token.address,
    abi: token.abi,
    functionName: "donateToCampaign",
    args: [!isNaN(parseInt(_id)) ? parseInt(_id) : 0],
    gasLimit: 50000,
  });

  const {
    data: writeData,
    isLoading: writeLoading,
    write,
  } = useContractWrite({
    ...config,
    onSuccess(data) {
      alert("Success", data);
      window.location.href = "/";
    },
  });

  const handleChange = (e) => {
    e.preventDefault();
    write?.();
    setId("");
  };

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xl"];

  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleSizeClick(size)}
          m={4}
          style={{ backgroundColor: "rgb(128, 84, 222)", color: "white" }}
        >
          Donate
        </Button>
      ))}

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader fontSize={"40px"}>Donate</ModalHeader>
          </Center>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Stack spacing={4}>
                <FormLabel fontSize={"30px"} mt={5}>
                  Amount
                </FormLabel>
                <Input
                  type="default"
                  id="_id"
                  onChange={(e) => setId(e.target.value)}
                  value={_id}
                  placeholder="Enter your contribution"
                  bg={"white"}
                  color={"black"}
                  _placeholder={{ color: "black" }}
                  h={14}
                  textAlign="left"
                />
                <Select
                  placeholder="Celo"
                  bg={"white"}
                  color="black"
                  h={14}
                  w={["58%", "50%", "100%"]}
                >
                  <option>Eth</option>
                </Select>
              </Stack>
            </Center>
            <Center>
              <Button
                style={{ backgroundColor: "rgb(128, 84, 222)", color: "white" }}
                mt={"10px"}
                onClick={handleChange}
                type="submit"
              >
                {writeLoading ? "Donating" : "Donate"}
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

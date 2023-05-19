import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Select,
  Input,
  FormControl,
  FormLabel,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { token } from "../../Components/Contract";

export default function DonateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const { config } = usePrepareContractWrite({
    address: token.address,
    abi: token.abi,
    functionName: "createCampaign",
    args: [_title, _description],
  });

  const [_title, setTitle] = useState("");
  const [_description, setDescription] = useState("");

  const {
    data: writeData,
    isLoading: writeLoading,
    isSuccess,
    write,
  } = useContractWrite(config);

  const handleChange = (e) => {
    e.preventDefault();
    write?.();
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

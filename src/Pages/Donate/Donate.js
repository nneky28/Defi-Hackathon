import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./Donate.css";
import "../SignUp/Form.css";
import { Text, Image, HStack } from "@chakra-ui/react";

export const Donate = () => {
  return (
    <div className="Donate--Container">
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
    </div>
  );
};

import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./CreateProject.css";
import "../SignUp/Form.css";
import Footer from "../../Layouts/Footer";
import { Text, Image, HStack } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateProject = () => {
  return (
    <section className="CreateProject--Container">
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

      <div className="CreateProject">
        <h2>PROJECT CREATION</h2>
        <div className="arrow">
          <Image src="line.png" alt="line" w={{ base: "30%", md: "10%" }} />
        </div>
        <p>Create a new project by filling out the form below</p>

        <button className="Submit--button" type="submit">
          Continue
        </button>
        <ToastContainer />
      </div>
      <Footer />
    </section>
  );
};

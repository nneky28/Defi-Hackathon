import React, { useContext,Component } from "react";
import { Text, Image, HStack } from "@chakra-ui/react";
import "../SignUp/Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Routes/UserContext";

export class InvestSignUp extends Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    walletAddress: "",
    country: "",
    phone: "",
    data: [],
    userType:'Investor'
  };

  getData = (e) => {
    const { value, name } = e.target;
    console.log("Input name:", name);

    this.setState({
      [name]: value,
    });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  

  continueFunc = (e) => {
    const { updateUserType } = useContext(UserContext); // Access updateUserType from UserContext
    e.preventDefault();
    const { fullName, email, password, walletAddress, country, phone } =
      this.state;
    if (
      !fullName ||
      !email ||
      !walletAddress ||
      !password ||
      !country ||
      !phone
    ) {
      toast.error("Please fill all required fields");
    } else {
      const userType = 'Investor';
      updateUserType(userType); 
      localStorage.setItem(
        'user',
        JSON.stringify({...this.state.data,})
      );
  
      this.nextStep();
      window.location.href = '/';
      console.log('type',this.state)
    }
  };

  addData = (e) => {
    e.preventDefault();

    const { fullName, email, password, walletAddress, country, phone } =
      this.state;

    if (fullName === "") {
      toast.error(" name field is required!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email address", {
        position: "top-center",
      });
    } else if (walletAddress === "") {
      toast.error("wallet Address required is required", {
        position: "top-center",
      });
    } else if (password === "") {
      alert("password field is required", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else if (country === "") {
      toast.error("country field is required", {
        position: "top-center",
      });
    } else if (phone === "") {
      toast.error("password field is required", {
        position: "top-center",
      });
    } else {
      window.location.href = "/";
    }
  };

  render() {
    return (
      <section className="Two--in--one--pages">
        <div className="up--div">
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
          <div className="Form">
            <h2 className="Form--heading">CREATE YOUR ACCOUNT</h2>
            <div className="arrow">
            <Image src="line.png" alt="line" w={{ base: "30%", md: "10%" }} />
            </div>

            <div className="Form--control">
              <label>Full Name</label>
              <input
                className="Input"
                name="fullName"
                value={this.state.fullName}
                onChange={this.getData}
                type="text"
                placeholder="&nbsp; e.g Roberts Ella"
              ></input>
            </div>

            <div className="Form--control">
              <label>Email Address</label>
              <input
                className="Input"
                name="email"
                value={this.state.email}
                onChange={this.getData}
                type="text"
                placeholder="&nbsp; robertsella@gmail.com"
              ></input>
            </div>

            <div className="Form--control">
              <label>Password</label>
              <input
                className="Input"
                name="password"
                value={this.state.password}
                onChange={this.getData}
                type="password"
                placeholder=" &nbsp;********"
              ></input>
            </div>

            <div className="Form--control">
              <h3 className="Password">Password must contain: </h3>
              <h3 className="Password--option">
                <span className="Dot">•</span> At least 8 characters
              </h3>
              <h3 className="Password--option">
                <span className="Dot">•</span> At least one number
              </h3>
              <h3 className="Password--option">
                <span className="Dot">•</span> At least one lowercase letter
              </h3>
              <h3 className="Password--option">
                <span className="Dot">•</span> At least one uppercase letter
              </h3>
            </div>

            <div className="Form--control">
              <label>Wallet Address for cryptocurrency</label>
              <input
                className="Input"
                name="walletAddress"
                value={this.state.walletAddress}
                onChange={this.getData}
                type="text"
                placeholder="&nbsp; eg Celo, cUSD, or ETH"
              ></input>
            </div>

            <div className="Two--in--one">
              <div className="Form--control first">
                <label>Country of Residence</label>
                <input
                  className="Input"
                  name="country"
                  value={this.state.country}
                  onChange={this.getData}
                  type="text"
                  placeholder=" &nbsp;e.g Nigeria"
                ></input>
              </div>

              <div className="Form--control second">
                <label>Phone Number (optional)</label>
                <input
                  className="Input"
                  value={this.state.phone}
                  name="phone"
                  onChange={this.getData}
                  type="text"
                  placeholder=" &nbsp;+234 "
                ></input>
              </div>
            </div>

            <p className="Form--para">
              By creating an account, you accept the Terms of Service & Privacy
              Policy
            </p>
            <div>
              <button
                className="Submit--button"
                onClick={this.addData}
                type="submit"
              >
                Create an account
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>

        <div className="down--div">
          <h2 className="second--heading">
            A highly-curated <br></br>
            decentralised crowdfunding platform <br></br>
            for tech startup
          </h2>

          <div className="articles">
            <div className="Article--holder">
              <div className="Aside">
                <div className="square"></div>
                <h3 className="Sub--heading">Fundraising campaigns</h3>
              </div>
              <p className="Para">
                A platform for tech startup to create fundraising campaign and
                accept contributions in cryptocurrency directly from investors.
              </p>
            </div>

            <div className="Article--holder">
              <div className="Aside">
                <div className="square"></div>
                <h3 className="Sub--heading">Fundraising goals</h3>
              </div>
              <p className="Para">
                Ability for startups to set fundraising goals and deadlines,
                track the progress of their campaign and communicate with their
                supports.
              </p>
            </div>

            <div className="Article--holder">
              <div className="Aside">
                <div className="square"></div>
                <h3 className="Sub--heading">Secure Payment system</h3>
              </div>
              <p className="Para">
                A payment system that enables investors to contribute
                cryptocurrency to the campaign and receive tokens or other
                rewards in return.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default InvestSignUp;

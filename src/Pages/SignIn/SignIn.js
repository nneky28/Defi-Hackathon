import "../SignUp/Form.css";
import "./signIn.css";
import { Text, Image, HStack } from "@chakra-ui/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  getData = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  addData = (e) => {
    e.preventDefault();

    const getuser = JSON.parse(localStorage.getItem("user"));
    console.log(getuser);

    const { email, password } = this.state;
    if (email === "") {
      toast.error("pls enter valid email address", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("pls enter valid email address", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is required", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      if (getuser) {
        const lastSavedUser = getuser[getuser.length - 1];
        this.setState({
          email: lastSavedUser.email,
          password: lastSavedUser.password,
        });
      }
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
            <h2 className="Form--heading1">SIGN IN INTO YOUR ACCOUNT</h2>
            <div className="arrow">
              <Image src="line.png" alt="line" w={{ base: "30%", md: "10%" }} />
            </div>

            <div className="Form--control2">
              <label>Email Address</label>
              <input
                className="Input"
                type="text"
                name="email"
                onChange={this.getData}
                placeholder="&nbsp; e.g robertsella@gmail.com"
              ></input>
            </div>

            <div className="Form--control2">
              <label>Password</label>
              <input
                className="Input"
                name="password"
                type="password"
                onChange={this.getData}
                placeholder="&nbsp; ********"
              ></input>
            </div>

            <p className="Form--para2">
              By creating an logging in you accept the Terms of Service &
              Privacy Policy
            </p>
            <button
              onClick={this.addData}
              className="Submit--button"
              type="submit"
            >
              Sign in
            </button>
            <ToastContainer />

            <p className="mt-5 Form--para">
              Don't have an account{" "}
              <span style={{ color: "#f17105" }}>
                <Link to="/SignUp">SignUp</Link>
              </span>
            </p>
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

export default SignIn;

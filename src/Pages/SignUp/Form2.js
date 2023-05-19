import "./Form.css";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Text, Image, HStack } from "@chakra-ui/react";

export class Form2 extends Component {
  state = {
    profilePicture: "",
    companyName: "",
    biography: "",
    projectTitle: "",
    socialMedia: "",
    data: [],
  };

  getData = (e) => {
    const { value, name } = e.target;
    console.log("Input name:", name);

    this.setState({
      [name]: value,
    });
  };

  continueFunc = (e) => {
    e.preventDefault();

    const {
      profilePicture,
      companyName,
      biography,
      projectTitle,
      socialMedia,
    } = this.state;
    if (
      !profilePicture ||
      !companyName ||
      !biography ||
      !projectTitle ||
      !socialMedia
    ) {
      toast.error("Please fill all required fields");
    } else {
      localStorage.setItem(
        "user",
        JSON.stringify([...this.state.data, this.state])
      );
      toast.success("data added successfully");
      this.props.nextStep();
      window.location.href = "/SignIn";
    }
  };

  addData = (e) => {
    e.preventDefault();

    const {
      profilePicture,
      companyName,
      biography,
      projectTitle,
      socialMedia,
    } = this.state;

    if (profilePicture === "") {
      toast.error(" company field is required!", {
        position: "top-center",
      });
    } else if (companyName === "") {
      toast.error("biography field is required", {
        position: "top-center",
      });
    } else if (biography === "") {
      toast.error("biography field is required", {
        position: "top-center",
      });
    } else if (projectTitle === "") {
      toast.error("project field is required", {
        position: "top-center",
      });
    } else if (socialMedia === "") {
      toast.error("social field is required", {
        position: "top-center",
      });
    } else {
      this.continueFunc(e);
    }
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
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
            <h3
              style={{
                fontSize: "16px",
                lineHeight: "22px",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Step 2 of 2
            </h3>

            <div className="Line--frame">
              <div className="Line--right">
                <hr className="hh--Style" />
              </div>
              <div className="Line--left">
                <hr className="hh--Style" />
              </div>
            </div>

            <div className="Form--control">
              <label>Profile Picture</label>
              <input
                className="Input2"
                name="profilePicture"
                type="file"
                placeholder="&nbsp; Drag and drop or Select file (in jpeg or png format only)"
                onChange={this.getData}
                values={this.state.profilePicture}
              ></input>
            </div>

            <div className="Form--control">
              <label>Company’s name and Description</label>
              <input
                className="Input"
                name="companyName"
                type="text"
                placeholder="&nbsp; Enter company’s name here and add a description"
                onChange={this.getData}
                values={this.state.companyName}
              ></input>
            </div>

            <div className="Form--control">
              <label>Biography</label>
              <input
                className="Input"
                name="biography"
                type="text"
                placeholder="&nbsp; Add a bio"
                onChange={this.getData}
                values={this.state.biography}
              ></input>
            </div>

            <div className="Form--control">
              <label>Project title and Description</label>
              <input
                className="Input"
                name="projectTitle"
                type="text"
                placeholder=" &nbsp; Enter project title and description"
                onChange={this.getData}
                values={this.state.projectTitle}
              ></input>
            </div>

            <div className="Form--control">
              <label>Social Media Link</label>
              <input
                className="Input"
                name="socialMedia"
                type="text"
                placeholder=" &nbsp; Add your Discord & telegram links"
                onChange={this.getData}
                values={this.state.socialMedia}
              ></input>
            </div>

            <div className="buttons">
              <button onClick={this.back} className="goBack">
                Go back
              </button>
              <button onClick={this.addData} className="Submit">
                Create an account{" "}
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
export default Form2;

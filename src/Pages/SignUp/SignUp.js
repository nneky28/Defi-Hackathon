import React, { Component } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";

export class SignUp extends Component {
  state = {
    step: 1,
    fullName: "",
    email: "",
    password: "",
    walletAddress: "",
    country: "",
    phone: "",
    profilePicture: "",
    companyName: "",
    biography: "",
    projectTitle: "",
    socialMedia: "",
  };

  //Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //Handle input change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      fullName,
      email,
      password,
      walletAddress,
      country,
      phone,
      profilePicture,
      companyName,
      biography,
      projectTitle,
      socialMedia,
    } = this.state;

    const values = {
      fullName,
      email,
      password,
      walletAddress,
      country,
      phone,
      profilePicture,
      companyName,
      biography,
      projectTitle,
      socialMedia,
    };

    switch (step) {
      case 1:
        return (
          <Form1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Form2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default:
        return;
    }
  }
}
export default SignUp;

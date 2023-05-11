import "./Form.css";
import React, { Component } from "react";
import classNames from "classnames";

export class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: "",
      input2: "",
      input3: "",
      input5: "",
      input6: "",
      allInputsFilled: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      (prevState) => ({
        ...prevState,
        [name]: value,
      }),
      this.checkAllInputsFilled // callback to check if all inputs are filled
    );
  };

  checkAllInputsFilled = () => {
    const { input1, input2, input3, input5, input6 } = this.state;
    if (input1 && input2 && input3 && input5 && input6) {
      this.setState({ allInputsFilled: true });
    } else {
      this.setState({ allInputsFilled: false });
    }
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { input1, input2, input3, input5, input6, allInputsFilled } =
      this.state;
    const { values } = this.props;

    const buttonClassNames = classNames("Submit--button", {
      disabled: !allInputsFilled,
    });

    return (
      <section className="Two--in--one--pages">
        <div className="up--div">
          <div className="crypto">
            <img
              className="cryptoLogo"
              src="/images/cryptoLogo (1).webp"
              alt="logo"
            ></img>
          </div>
          <div className="Form">
            <h2 className="Form--heading">CREATE YOUR ACCOUNT</h2>
            <div className="arrow">
              <img src="/images/arrow.webp" alt="logo"></img>
            </div>
            <h3
              style={{
                fontSize: "16px",
                lineHeight: "22px",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Step 1 of 2
            </h3>
            <div className="Line--frame">
              <div className="Line--right">
                <hr className="hr--Style" />
              </div>
              <div className="Line--left">
                <hr />
              </div>
            </div>

            <div className="Form--control">
              <label>Full Name</label>
              <input
                className="Input"
                name="input1"
                value={input1}
                onChange={this.handleInputChange}
                type="text"
                placeholder="&nbsp; e.g Roberts Ella"
                defaultValue={values.fullName}
              ></input>
            </div>

            <div className="Form--control">
              <label>Email Address</label>
              <input
                className="Input"
                name="input2"
                value={input2}
                onChange={this.handleInputChange}
                type="text"
                placeholder="&nbsp; robertsella@gmail.com"
                defaultValue={values.email}
              ></input>
            </div>

            <div className="Form--control">
              <label>Password</label>
              <input
                className="Input"
                name="input3"
                value={input3}
                onChange={this.handleInputChange}
                type="text"
                placeholder=" &nbsp;********"
                defaultValue={values.password}
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

            <div className="Two--in--one">
              <div className="Form--control first">
                <label>Country of Residence</label>
                <input
                  className="Input"
                  name="input5"
                  value={input5}
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder=" &nbsp;e.g Nigeria"
                  defaultValue={values.country}
                ></input>
              </div>

              <div className="Form--control second">
                <label>Phone Number (optional)</label>
                <input
                  className="Input"
                  name="input6"
                  value={input6}
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder=" &nbsp;+234 "
                  defaultValue={values.phone}
                ></input>
              </div>
            </div>

            <p className="Form--para">
              By creating an account, you accept the Terms of Service & Privacy
              Policy
            </p>
            <div>
              <button
                className={buttonClassNames}
                onClick={this.continue}
                type="submit"
                disabled={!allInputsFilled}
              >
                Continue
              </button>
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
export default Form1;

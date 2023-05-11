import "./Form.css";
import React, { Component } from "react";

export class Form2 extends Component {
  continue = (e) => {
    e.preventDefault();
    //ABI CALLING HERE
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

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
              Step 2 of 2
            </h3>

            <div className="Line--frame">
              <div className="Line--right">
                <hr className="hr--Style" />
              </div>
              <div className="Line--left">
                <hr className="hr--Style" />
              </div>
            </div>

            <div className="Form--control">
              <label>Profile Picture</label>
              <input
                className="Input2"
                type="file"
                placeholder="&nbsp; Drag and drop or Select file (in jpeg or png format only)"
                onChange={handleChange(values.profilePicture)}
                values={values.profilePicture}
              ></input>
            </div>

            <div className="Form--control">
              <label>Company’s name and Description</label>
              <input
                className="Input"
                type="text"
                placeholder="&nbsp; Enter company’s name here and add a description"
                onChange={handleChange(values.companyName)}
                values={values.companyName}
              ></input>
            </div>

            <div className="Form--control">
              <label>Biography</label>
              <input
                className="Input"
                type="text"
                placeholder="&nbsp; Add a bio"
                onChange={handleChange(values.biography)}
                values={values.biography}
              ></input>
            </div>

            <div className="Form--control">
              <label>Project title and Description</label>
              <input
                className="Input"
                type="text"
                placeholder=" &nbsp; Enter project title and description"
                onChange={handleChange(values.projectTitle)}
                values={values.projectTitle}
              ></input>
            </div>

            <div className="Form--control">
              <label>Social Media Link</label>
              <input
                className="Input"
                type="text"
                placeholder=" &nbsp; Add your Discord & telegram links"
                onChange={handleChange(values.socialMedia)}
                values={values.socialMedia}
              ></input>
            </div>

            <div className="buttons">
              <button onClick={this.back} className="goBack">
                Go back
              </button>
              <button onClick={this.continue} className="Submit">
                Create an account{" "}
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
export default Form2;

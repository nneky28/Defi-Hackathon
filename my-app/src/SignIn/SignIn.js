import "../SignUp/Form.css";
import "./signIn.css";
import React from "react";

function SignIn() {
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
          <h2 className="Form--heading1">SIGN IN INTO YOUR ACCOUNT</h2>
          <div className="arrow">
            <img src="/images/arrow.webp" alt="logo"></img>
          </div>

          <div className="Form--control2">
            <label>Email Address / Username</label>
            <input
              className="Input"
              type="text"
              placeholder="&nbsp; e.g robertsella@gmail.com"
            ></input>
          </div>

          <div className="Form--control2">
            <label>Password</label>
            <input
              className="Input"
              type="text"
              placeholder="&nbsp; ********"
            ></input>
          </div>

          <p className="Form--para2">
            By creating an logging in you accept the Terms of Service & Privacy
            Policy
          </p>
          <button className="Submit--button" type="submit">
            Sign in
          </button>
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
              Ability for startups to set fundraising goals and deadlines, track
              the progress of their campaign and communicate with their
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
              cryptocurrency to the campaign and receive tokens or other rewards
              in return.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;

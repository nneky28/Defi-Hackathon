import "../SignUp/Form.css";
import "./ProjectCreation.css";
import React from "react";

function Project() {
  return (
    <section className="Two--in--one--pages">
      <div className="Container">
        <div className="crypto">
          <img
            className="cryptoLogo"
            src="/images/cryptoLogo (1).webp"
            alt="logo"
          ></img>
        </div>

        <div className="Form">
          <h2 className="Form--heading1">PROJECT CREATION</h2>
          <div className="arrow">
            <img src="/images/arrow.webp" alt="logo"></img>
          </div>
          <p>Create a new project by filling out the form below</p>
        </div>
      </div>
    </section>
  );
}
export default Project;

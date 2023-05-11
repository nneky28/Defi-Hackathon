import React, { Component } from "react";

export class Form2 extends Component {
  continue = (e) => {
    e.preventDefault();

    this.props.nextStep();
  };
  render() {
    return (
      <>
        <h1>Thank you for your submission</h1>
        <p>You will get an email with further instructions.</p>
      </>
    );
  }
}
export default Form2;

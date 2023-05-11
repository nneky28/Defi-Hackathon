import React from "react";
import { Donate } from "./Donate/Donate";
import UserForm from "./SignUp/UserForm";
import SignIn from "./SignIn/SignIn";
import Project from "./Project/ProjectCreation";

function App() {
  return (
    <div className="App">
      <UserForm />
      <SignIn />
      <Project />
      <Donate />
    </div>
  );
}

export default App;

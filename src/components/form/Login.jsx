import React, { Component } from "react";

import LoginForm2 from "./LoginForm2";

export default class Login extends Component {
  render() {
    return (
      <div className="login container">
          <div className="login_wrapper">
            <LoginForm2 />
          </div>
      </div>
      );
  }
}

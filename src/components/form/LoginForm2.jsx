import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import authService from "../../services/auth-service";
import { connect } from "react-redux";

import { loginAction, resetErrors } from "./../../actions";

import FormFeild from "./../shared/Form/FormFeild";
import { ResError } from "../shared/ResError";
import Form from "./Form";
import MyButton from "../shared/MyButton";
class LoginForm2 extends Form {
  constructor(props) {
    super(props);
    this.state = {
        formError: false,
        formErrorMessage: "",
        formSuccess: "",
      formData: {
        email: {
          element: "input",
          value: "",
          config: {
            name: "email_input",
            type: "email",
            placeholder: "Your Email"
          },
          validation: {
            required: true,
            email: true
          },
          valid: true,
          touched: false,
          validationMessage: ""
        },
        password: {
          element: "input",
          value: "",
          config: {
            name: "password_input",
            type: "password",
            placeholder: "Password"
          },
          validation: {
            required: true
          },
          valid: true,
          touched: false,
          validationMessage: ""
        }
      }
    };
  }

  submitAction = data => {
    
    this.props.loginAction(data);
    
  };
  render() {
    const { errors, isAuth } = this.props.auth;
    if (authService.isAuthenticated()) {
      return <Redirect to={{ pathname: "/user/dashboard" }} />;
    }
    return (
      <div className="signin_wrapper">
        <form onSubmit={this.submitForm}>
          <FormFeild
            id={"email"}
            formData={this.state.formData.email}
            change={element => this.updateForm(element)}
            isError={this.state.formError}
          />
          <FormFeild
            id={"password"}
            formData={this.state.formData.password}
            change={element => this.updateForm(element)}
            isError={this.state.formError}
          />

          <ResError errors={errors} />
          <MyButton buttonType='blue' value='Login' onClick={this.submitForm} />
       
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
      auth: state.auth
    };
  };
  export default connect(mapStateToProps, { loginAction, resetErrors})(
    LoginForm2
  );
  
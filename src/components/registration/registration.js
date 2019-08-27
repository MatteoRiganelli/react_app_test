import React from "react";

import CustomInput from "../common/input/customInput";
import RegistrationService from "./registrationService";


export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      fiscalCode: "",
      password: "",
      confirmedPassword: "",
      showSuccess: false,
      showError: false,
      errorMessage: "",
      successMessage: ""
    };
    this.registrationService = new RegistrationService();

  }
  changeText(field, event) {
    this.setState({ [field]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
  }
  registrationSuccess(dataResult) {
    this.setState({
      showSuccess: true,
      successMessage:
        "Complimenti per il login, il tuo token è: " + dataResult.token,
      showError: false,
      errorMessage: ""
    });
  }
  registrationError(errorData) {
    this.setState({
      showError: true,
      errorMessage: "Errore durante il login: " + errorData.error,
      showSuccess: false,
      successMessage: ""
    });
  }
  registration(event) {
    this.registrationService.registration(
      this.state.firstName,
      this.state.lastName,
      this.state.birthDate,
      this.state.fiscalCode,
      this.state.email,
      this.state.password,
      this.registrationSuccess.bind(this),
      this.registrationError.bind(this)
    );
    console.log("Login con email: ", this.state.email);
    console.log("Login con password: ", this.state.password);
  }
  getSuccessMessage() {
    if (this.state.showSuccess) {
      return <div style={{ color: "green" }}>{this.state.successMessage}</div>;
    } else {
      return <div />;
    }
  }
  getErrorMessage() {
    if (this.state.showError) {
      return <div style={{ color: "red" }}>{this.state.errorMessage}</div>;
    } else {
      return <div />;
    }
  }
  render() {
    var successMessage = this.getSuccessMessage();

    var errorMessage = this.getErrorMessage();

    return (
      <div style={{ marginTop: "100px", minHeight: "70vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-6 mr-auto ml-auto">
              <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                  <CustomInput
                    type="email"
                    placeholder="email"
                    value={this.state.email || ""}
                    onChange={this.changeText.bind(this, "email")}
                    label="email"
                  />
                </div>
                <div className="form-group">
                  <CustomInput
                    type="text"
                    placeholder="first name"
                    value={this.state.firstName || ""}
                    onChange={this.changeText.bind(this, "firstName")}
                    label="First name"
                  />
                </div>
                <div className="form-group">
                  <CustomInput
                    type="text"
                    placeholder="last name"
                    value={this.state.lastName || ""}
                    onChange={this.changeText.bind(this, "lastName")}
                    label="Last name"
                  />
                </div>
                <div className="form-group">
                  <CustomInput
                    type="date"
                    placeholder="birth date"
                    value={this.state.birthDate || ""}
                    onChange={this.changeText.bind(this, "birthDate")}
                    label="Birth date"
                  />
                </div>
                <div className="form-group">
                  <CustomInput
                    type="text"
                    placeholder="fiscal code"
                    value={this.state.fiscalCode || ""}
                    onChange={this.changeText.bind(this, "fiscalCode")}
                    label="Fiscal code"
                  />
                </div>
                <div className="form-group">
                  <CustomInput
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.changeText.bind(this, "password")}
                    label="Password"
                  />
                </div>
                <div className="form-group">
                  <CustomInput
                    type="password"
                    placeholder="confirmed password"
                    value={this.state.confirmedPassword}
                    onChange={this.changeText.bind(this, "confirmedPassword")}
                    label="Confirmed password"
                  />  
                </div>
                <button
                  type="submit"
                  className="btn btn-primary pull-right"
                  onClick={this.registration.bind(this)}
                >
                  Invio
                </button>
                {successMessage}
                {errorMessage}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

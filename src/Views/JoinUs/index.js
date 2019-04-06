import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { callApi } from "../../utils";
import "./joinUs.css";
class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      success: false,
      error: false,
      message: "",
      inputs: {
        fullName: "",
        phoneNumber: "",
        email: ""
      }
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      inputs: {
        ...this.state.inputs,
        [name]: value
      }
    });
  };

  handleSubmitChange = e => {
    const { fullName, email, phoneNumber } = this.state.inputs;
    if (!fullName) {
      return;
    }
    if (!email) {
      return;
    }
    if (!phoneNumber) {
      return;
    }
    e.preventDefault();
    this.setState({
      loading: true
    });
    callApi("/users/create", { ...this.state.inputs }, "POST")
      .then(data => {
        this.setState({
          loading: false,
          success: true
        });
      })
      .catch(err => {
        let errorsArray = err.response.data.errors ? err.response.data.errors  : [];
        let errorMessage = errorsArray.map(err => {
          console.log(err)
          let result = "";
          if (err.param === "phoneNumber") {
            result = "Phone Number";
          }
          if (err.param === "fullName") {
            result = "Full Name";
          }
          if (err.param === "email") {
            result = "Email";
          }
          return result;
        });
        this.setState({
          ...this.state,
          message:
            err.response.data.message ||
            `Provide valid details for ${errorMessage.join(", ")}`,
          loading: false,
          success: true,
          error: true
        });
      });
  };

  checkDetails = e => {
    this.setState({
      ...this.state,
      loading: false,
      success: false,
      error: false
    });
  };

  render() {
    const { fullName, phoneNumber, email } = this.state.inputs;
    return (
      <div className="joinus-container">
        {this.state.success && !this.state.loading ? (
          <div>
            {this.state.error ? (
              <React.Fragment>
                <h4>{this.state.message}</h4>
                <button className="back" onClick={this.checkDetails}>
                  Check
                </button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h4>
                  Thanks for registering {fullName}, we'll keep you abreast with
                  developments. Stay tuned!!!
                </h4>
                <button className="back">
                  <Link to="/">Home</Link>
                </button>
              </React.Fragment>
            )}
          </div>
        ) : this.state.loading ? (
          <CircleLoader
            sizeUnit={"px"}
            size={60}
            color={"#123abc"}
            loading={this.state.loading}
          />
        ) : (
          <React.Fragment>
            <h2>Join Us</h2>
            <div className="page">
              <form>
                <div className="page__demo">
                  <label className="field a-field a-field_a1 page__field">
                    <input
                      className="field__input a-field__input"
                      placeholder="e.g. Danny"
                      name="fullName"
                      value={fullName}
                      onChange={this.handleInputChange}
                      required
                    />
                    <span className="a-field__label-wrap">
                      <span className="a-field__label">Full name</span>
                    </span>
                  </label>
                  <label className="field a-field a-field_a2 page__field">
                    <input
                      className="field__input a-field__input"
                      placeholder="e.g. 080********"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={this.handleInputChange}
                      required
                    />
                    <span className="a-field__label-wrap">
                      <span className="a-field__label">Phone Number</span>
                    </span>
                  </label>
                  <label className="field a-field a-field_a2 page__field">
                    <input
                      className="field__input a-field__input"
                      placeholder="e.g. testmail@test.com"
                      name="email"
                      value={email}
                      onChange={this.handleInputChange}
                      required
                    />
                    <span className="a-field__label-wrap">
                      <span className="a-field__label">E-mail</span>
                    </span>
                  </label>
                </div>
                <div className="button-container">
                  <button type="submit" onClick={this.handleSubmitChange}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default JoinUs;

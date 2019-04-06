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
    callApi("/user/create", { ...this.state.inputs }, "POST")
      .then(data => {
        this.setState({
          loading: false,
          success: true,
          inputs: {
            fullName: "",
            phoneNumber: "",
            email: ""
          }
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          ...this.state,
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
            <h4>
              Thanks for registering {fullName}, we'll keep you abreast with
              developments. Stay tuned!!!
            </h4>
            {this.state.error ? (
              <button className="back" onClick={this.checkDetails}>
                Check
              </button>
            ) : (
              <button className="back">
                <Link to="/">Home</Link>
              </button>
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

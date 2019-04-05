import React, { Component } from "react";
import "./joinUs.css";
class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert("The value is: " + this.input.value);
    e.preventDefault();
  }
  render() {
    return (
      <div className="joinus-container">
        <h2>Join Us</h2>
        <div className="page">
          <div className="page__demo">
            <label className="field a-field a-field_a1 page__field">
              <input
                className="field__input a-field__input"
                placeholder="e.g. Danny"
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
                required
              />
              <span className="a-field__label-wrap">
                <span className="a-field__label">E-mail</span>
              </span>
            </label>
          </div>
        </div>
        <div className="button-container" >
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default JoinUs;

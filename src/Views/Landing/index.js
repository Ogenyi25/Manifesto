import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import logo from '../../assets/logo.png'

class Landing extends Component {
  render() {
    return (
      <div className="landing">
      <div className="logo-container" >
        <img src={logo} alt="qr8tors_logo" />
      </div>
        <div className="button-container" >
          <button>
            <Link to="/join-us">JoinUs</Link>
          </button>
          <button>
            <Link to="/manifesto">Manifesto</Link>
          </button>
        </div>
      </div>
    );
  }
}
export default Landing;

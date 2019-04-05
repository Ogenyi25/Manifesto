import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import "./manifesto.css";

class Manifesto extends Component {
  render() {
    return (
      <div>
        <h3>Manifesto Page</h3>
        <div className="landing">
      <div className="logo-container" >
        <img src={logo} alt="qr8tors_logo" />
      </div>
      <h3>Qr8tors Manifesto</h3>
      <p>I.
        <br></br>We embrace chaos as the valent force of creativity.
      </p>
      <p>II.<br></br>We let our energy flow freely.
      </p>
      <p>III.<br></br>We live honestly.
      </p>
      <p>IV.<br></br>We build connection with those in our frequency.
      </p>
      <p>V.<br></br>Stumbling blocks don't end the road.
      </p>
      <p>VI.<br></br>Our goal is not perfection.
      </p>
      <p>VII.<br></br>We constantly evaluate our path.
      </p>
      <p>VIII.<br></br>"Insert yours here"
      </p>
      <p>Qr8tors is a community where creative individuals connect with other creatives and develop projects that move culture.</p>
      <p>Our interest include:</p>
      <ul>
        <li>Internet/Pop Culture</li>
        <li>Tech Innovations</li>
        <li>Media & Entertainment</li>
        <li>Urbanization</li>
        <li>Sustainable Design</li>
        <li>Digital Economy</li>
      </ul>
      </div>
      </div>
    );
  }
}
export default Manifesto;

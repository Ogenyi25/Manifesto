import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./manifesto.css";

const manifesto = [
  "We embrace chaos as the valent force of creativity.",
  "We let our energy flow freely.",
  "We live honestly.",
  "We build connection with those in our frequency.",
  "Stumbling blocks don't end the road.",
  "Our goal is not perfection.",
  "We constantly evaluate our path.",
  "Insert yours here"
];

class Manifesto extends Component {
  render() {
    return (
      <div className="manifesto">
        <div className="manifesto-logo-container">
          <img src={logo} alt="qr8tors_logo" />
        </div>
        <div className="manifesto-body" >
          <h3
            style={{
              textAlign: "center"
            }}
          >
            Qr8tors Manifesto
          </h3>
          <ul>
            {manifesto.map((manifest, index) => (
              <li key={`manifest_${index}`}>{manifest}</li>
            ))}
          </ul>
          <p>
            Qr8tors is a community where creative individuals connect with other
            creatives and develop projects that move culture.
          </p>
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

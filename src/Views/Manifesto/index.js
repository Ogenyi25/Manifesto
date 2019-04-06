import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import fblogo from "../../assets/fblogo.png";
import iglogo from "../../assets/iglogo.png";
import twlogo from "../../assets/twlogo.png";
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
        <div className="manifesto-body">
          <h3
            style={{
              textAlign: "center",
              fontFamily: "Impact"
            }}
          >
            Qr8tors Manifesto
          </h3>
          <ol>
            {manifesto.map((manifest, index) => (
              <li key={`manifest_${index}`}>{manifest}</li>
            ))}
          </ol>
          <p>
            Qr8tors is a community where creative individuals connect with other
            creatives and develop projects that move culture forward.
          </p>
          <p>Our interest include:</p>
          <ol className="plus">
            <li>Internet/Pop Culture</li>
            <li>Tech Innovations</li>
            <li>Media & Entertainment</li>
            <li>Urbanization</li>
            <li>Sustainable Design</li>
            <li>Digital Economy</li>
          </ol>
          <div
            style={{
              textAlign: "center"
            }}
          >
            <button className="back">
              <Link to="/join-us">Join Us</Link>
            </button>
            <div>
              <p>Qr8tors Manifesto by Qr8tors Idea Lab</p>
              <h4 style={{ textAlign: "center" }}>Follow Us</h4>
              <div className="socialLogo">
                <span>
                  <a href="#">
                    <img
                      src={fblogo}
                      alt="fb_logo"
                      style={{ maxHeight: "30px" }}
                    />{" "}
                  </a>
                  <a href="#">
                    <img
                      src={iglogo}
                      alt="ig_logo"
                      style={{ marginLeft: "30px", maxHeight: "30px" }}
                    />{" "}
                  </a>
                  <a href="#">
                    <img
                      src={twlogo}
                      alt="tw_logo"
                      style={{ marginLeft: "30px", maxHeight: "30px" }}
                    />{" "}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Manifesto;

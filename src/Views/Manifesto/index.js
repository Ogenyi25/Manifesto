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

const romanNum = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I"
];
// decimal number
var dNum = new Array();
dNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
function decimalRoman(value) {
  if (value <= 0 || value >= 4000) return value;
  var romanNumeral = "";
  for (var i = 0; i < romanNum.length; i++) {
    while (value >= dNum[i]) {
      value -= dNum[i];
      romanNumeral += romanNum[i];
    }
  }
  return romanNumeral;
}

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
          <div className="manifesto-content">
            {manifesto.map((manifest, index) => (
              <div key={`manifest_${index}`}>
                <p>{decimalRoman(index + 1)}</p>
                <p>{manifest}</p>
              </div>
            ))}
          </div>
          <p>
            Qr8tors is a community where creative individuals connect with other
            creatives and develop projects that move culture forward.
          </p>
          <br />
          <p>
            The community compromises of artists, tech enthusiasts, creative
            designers, programmers, architects, entrepreneurs and poets.
          </p>
          <div className="plus">
          <h3 >Our interest include:</h3>
            <p> + Internet/Pop Culture</p>
            <p> + Tech Innovations</p>
            <p> + Media & Entertainment</p>
            <p> + Urbanization</p>
            <p> + Sustainable Design</p>
            <p> + Digital Economy</p>
          </div>
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

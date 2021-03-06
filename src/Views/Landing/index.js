import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import fblogo from '../../assets/fblogo.png'
import iglogo from '../../assets/iglogo.png'
import twlogo from '../../assets/twlogo.png'
import logo from '../../assets/logo.png'
// import {FacebookShareButton, TwitterShareButton, FacebookIcon} from 'react-share';



class Landing extends Component {
  render() {
    return (
      <div className="landing">
        {/* <FacebookIcon size={32} round={true} /> */}
        

        <div className="logo-container" >
          <img src={logo} alt="qr8tors_logo" />
        </div>
        <div className="button-container" >
          <button>
            <Link to="/manifesto">Manifesto</Link>
          </button>
          <button className="back" >
            <Link to="/join-us">JoinUs</Link>
          </button>
        </div><br></br>
        <h4>Follow Us</h4><br></br>
        <div className="socialLogo">
          <span>
            <a href="https://www.facebook.com/Qr8torsLab/"><img src={fblogo} alt="fb_logo" style={{ maxHeight: '30px' }} /> </a>
            <a href="https://www.instagram.com/qr8torslab/"><img src={iglogo} alt="ig_logo" style={{ marginLeft: '30px', maxHeight: '30px' }} /> </a>
            <a href="https://twitter.com/qr8tors"><img src={twlogo} alt="tw_logo" style={{ marginLeft: '30px', maxHeight: '30px' }} /> </a>
          </span>
        </div>
      </div>

    );
  }
}
export default Landing;

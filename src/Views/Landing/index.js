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
        <div className="socialLogo">
          <span>
            <a href="#"><img src={fblogo} alt="fb_logo" style={{ maxHeight: '30px' }} /> </a>
            <a href="#"><img src={iglogo} alt="ig_logo" style={{ maxHeight: '30px' }} /> </a>
            <a href="#"><img src={twlogo} alt="tw_logo" style={{ maxHeight: '30px' }} /> </a>
          </span>
        </div>

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

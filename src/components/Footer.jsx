import React from "react";
import ZuriLogo from "../assets/zuri-internship-img.svg";
import IngressiveLogo from "../assets/I4G-Logo-Main.webp";
const Footer = () => {
  return (
    <div className="footer">
      <hr />

      <div className="logos">
        <img src={ZuriLogo} alt="zuri-internship logo" />
        <div className="">
          <p>HNG Internship 9 Frontend task</p>
        </div>
        <img
          className="ingressive"
          src={IngressiveLogo}
          alt="ingressive logo"
        />
      </div>
    </div>
  );
};

export default Footer;

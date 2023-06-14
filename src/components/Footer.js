import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className="text-center px-3 py-1"
      style={{backgroundColor: "#F8F9FA", bottom:0, width:"100%", position: "fixed"}}>
        <div>
          <i className="social fa-brands px-2"><FaTwitter /></i>
          <i className="social fa-brands px-2"><FaFacebook /></i>
          <i className="social fa-brands px-2"><FaInstagram /></i>
          <i className="social fa-solid px-2"><FaEnvelope /></i>
        </div>
        <p style={{fontSize: "0.8rem", color: "#8f8f8f", marginTop: "10px"}}>
          © Copyright kudtarkarSahil
        </p>
      </footer>
    </>
  );
};

export default Footer;
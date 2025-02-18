import React from "react";
import "./Footer.css";
import instagram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import star_icon from "../Assets/star_icon.png";

export const Footer = () => {
  return (
    <div className="footer-elements">
      <div className="box contact">
        <div className="contact-details">
          <h4>Où nous trouver</h4>
        </div>
        <ul className="contact-info">
          <li>Tunisia</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="box social-networks">
        <div className="social-networks-list">
          <h4>Lansstagram wel Ouatssap</h4>
        </div>
        <p>
          <img id="whatsapp-pic" alt="whatsapp icon" src={whatsapp_icon} />
          <img id="insta-pic" alt="instagram icon" src={instagram_icon} />
        </p>
      </div>

      <div className="box copyright">
        <div className="copyright-details">
          <h4>Made bel copyright</h4>
        </div>
        <p>
          Made with love
          <img id="star-pic" alt="star icon" src={star_icon} />
        </p>
      </div>
      <div className="box info-links">
        <h4>Informations sérieuses</h4>
        <ul className="info-links">
          <li>Mentions légales</li>
          <li>CGV</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

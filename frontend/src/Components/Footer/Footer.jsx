import React from "react";
import "./Footer.css";
import instagram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import star_icon from "../Assets/star_icon.png";

export const Footer = () => {
  return (
    <div className="footer-elements">
      <div className="box-contact">
        <ul className="contact-info">
          <h4>Où nous trouver</h4>
          <li>Adresse, Djerba, Tunisia</li>

          <li>
            Instagram{" "}
            <img id="insta-pic" alt="instagram icon" src={instagram_icon} />
          </li>
          <li>
            WhatsApp{" "}
            <img id="whatsapp-pic" alt="whatsapp icon" src={whatsapp_icon} />
          </li>
        </ul>
      </div>

      <div className="box-info-links">
        <ul className="info-links">
          <h4>Informations sérieuses</h4>
          <li>
            Contact, Email <img id="star-pic" alt="star icon" src={star_icon} />
          </li>
          <li>Mentions légales</li>
          <li>CGV</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./About.css";
import beach_djerba from "../Assets/beach_djerba.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>L'histoire</h2>
        <p>
          Chez MARIOULI, on aime les vêtements bien coupés, les lignes épurées
          et les plats épicés. On adore les tissus légers et les histoires qui
          ne se terminent jamais. On adore les robes stylées et les vestes
          revisitées, on aime le bleu et le blanc, les murs à la chaux et les
          thés chauds, les vues sur mer et les recettes de grand-mères. On se
          sent chez nous à Tunis, à Paris ou Palerme, dans les rues bondées du
          Caire ou à l’ombre des petites rues du Panier. En vrai, on est Made in
          Méditerranée !
        </p>
      </div>
      <img
        id="beach-djerba"
        src={beach_djerba}
        alt="beach in Djerba"
        style={{ width: "50%", height: "auto" }}
      />
    </div>
  );
};

export default About;

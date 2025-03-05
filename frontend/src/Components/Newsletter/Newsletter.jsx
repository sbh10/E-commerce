import React from "react";
import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>EL JARIDA</h2>
      <p>On n'envoie pas beaucoup de messages. Lezem fel lezem.</p>
      <div>
        <input type="email" placeholder="Your email here" />
        <button>Subscribe fissa3</button>
      </div>
    </div>
  );
};

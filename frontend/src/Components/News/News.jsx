import React from "react";
import "./News.css";
import exclusive_image from "../Assets/exclusive_image.png";
import hero_image from "../Assets/hero_image.png";
import new_t_shirt from "../Assets/new_t_shirt.png";

export const News = () => {
  return (
    <div className="main-collection">
      <div className="news">
        <div className="main-new-t-shirt">
          <h2>HARISSA</h2>
          <img
            id="new_t_shirt"
            src={new_t_shirt}
            alt="new mariouli t-shirt"
            style={{ width: "300px", height: "auto" }}
          />
          <p>L'incontournable t-shirt blanc</p>
        </div>

        <div className="news-left">
          <h2>PLAGE</h2>
          <img
            id="exclusive_image"
            src={exclusive_image}
            alt="mariouli last collection"
            style={{ width: "300px", height: "auto" }}
          />
          <p>L'incontournable t-shirt noir</p>
        </div>

        <div className="news-right">
          <h2>FOUTA</h2>
          <img
            id="hero_image"
            src={hero_image}
            alt="mariouli last collection"
            style={{ width: "300px", height: "auto" }}
          />
          <p>L'incontournable t-shirt bleu</p>
        </div>
      </div>
    </div>
  );
};
export default News;

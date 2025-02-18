import React from "react";
import "./News.css";
import exclusive_image from "../Assets/exclusive_image.png";
import hero_image from "../Assets/hero_image.png";
import new_t_shirt from "../Assets/new_t_shirt.png";

export const News = () => {
  return (
    <div className="main-collection">
      <div className="new-t-shirt">
        <div className="new-t-shirt">
          <h2>COLLECTION 2025</h2>
          <img
            id="new_t_shirt"
            src={new_t_shirt}
            alt="new mariouli t-shirt"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
        <p>L'incontournable t-shirt blanc</p>
      </div>
      <div className="news">
        <div className="news-left">
          <div className="new-collection">
            <h2>EL JDID</h2>
            <img
              id="exclusive_image"
              src={exclusive_image}
              alt="mariouli last collection"
              style={{ width: "300px", height: "auto" }}
            />
          </div>
          <p>Collection 2025</p>
        </div>

        <div className="news-right">
          <div className="last-collection">
            <h2>EL BEYET</h2>
            <img
              id="hero_image"
              src={hero_image}
              alt="mariouli last collection"
              style={{ width: "300px", height: "auto" }}
            />
          </div>
          <p>Collection gdima</p>
        </div>
      </div>
    </div>
  );
};
export default News;

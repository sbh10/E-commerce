import React, { useState } from "react";
import "./Item.css";

const Item = ({ images, name, description, new_price, old_price }) => {
  const [mainImage, setMainImage] = useState(images[0]); // Image principale

  return (
    <div className="item">
      <div className="item-container">
        {/* Miniatures en colonne */}
        <div className="thumbnail-column">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className="thumbnail"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* Image principale */}
        <div className="main-image">
          <img src={mainImage} alt="Main Product" />
        </div>

        {/* Infos produit */}
        <div className="item-info">
          <p id="name-of-item">{name}</p>
          <div className="img-description">{description}</div>
          <div className="item-prices">
            <div className="item-price-new">{new_price}</div>
            <div className="item-price-old">{old_price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

// import React from "react";
// import "./Item.css";

// const Item = (props) => {
//   return (
//     <div className="item">
//       <div className="img-and-name">
//         <img src={props.image} alt="" />
//         <p id="name-of-item">{props.name}</p>
//         <div className="img-description">{props.description}</div>
//       </div>

//       <div className="item-prices">
//         <div className="item-price-new">{props.new_price}</div>
//         <div className="item-price-old">{props.old_price}</div>
//       </div>
//     </div>
//   );
// };

// export default Item;

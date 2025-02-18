import React from "react";
import "./Collection.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

export const Collection = () => {
  return (
    <div className="catalogue">
      <h2>Marioul jdid</h2>
      <div className="catalogue-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

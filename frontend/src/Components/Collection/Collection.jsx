import React from "react";
import Item from "../Item/Item";
import data_product from "../Assets/data";
import "./Collection.css";
import { BuyProduct } from "../BuyProduct/BuyProduct";

export const Collection = () => {
  return (
    <div className="catalogue">
      <h2>MARIOUL JDID</h2>
      <div className="catalogue-item">
        {data_product.map((product) => (
          <Item
            key={product.id}
            images={product.images}
            name={product.name}
            description={product.description}
            new_price={`${product.new_price} €`}
            old_price={`${product.old_price} €`}
          />
        ))}
      </div>
      <BuyProduct product={data_product[0]} />
    </div>
  );
};

// import React from "react";
// import "./Collection.css";
// import data_product from "../Assets/data";
// import Item from "../Item/Item";
// import { BuyProduct } from "../BuyProduct/BuyProduct";

// export const Collection = () => {
//   return (
//     <div className="catalogue">
//       <h2>Marioul jdid</h2>
//       <div className="catalogue-item">
//         {data_product.map((item, i) => {
//           return (
//             <Item
//               key={i}
//               id={item.id}
//               name={item.name}
//               image={item.image}
//               new_price={item.new_price}
//               old_price={item.old_price}
//               description={item.description}
//             />
//           );
//         })}
//       </div>
//       <BuyProduct />
//     </div>
//   );
// };

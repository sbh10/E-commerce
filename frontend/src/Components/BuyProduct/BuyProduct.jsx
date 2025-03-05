import React, { useContext, useState } from "react";
import "./BuyProduct.css";
import { CartContext } from "../../Context/CartContext";

export const BuyProduct = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState("M"); // Taille par défaut

  return (
    <div className="select-and-add">
      <h2>Sélectionner la taille</h2>
      <div className="select-size">
        {["S", "M", "L", "XL"].map((size) => (
          <div
            key={size}
            className={selectedSize === size ? "selected" : ""}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </div>
        ))}
      </div>
      <button
        onClick={
          () => addToCart({ ...product, size: selectedSize }) // ✅ Envoie un vrai produit
        }
      >
        Ajouter au panier
      </button>
    </div>
  );
};

export default BuyProduct;

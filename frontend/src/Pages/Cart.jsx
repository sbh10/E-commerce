import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartPage from "../Components/CartPage/CartPage";

const Cart = () => {
  const { cart } = useContext(CartContext);
  if (!cart) {
    return <p>Erreur : Impossible de charger le panier.</p>;
  }
  return (
    <div>
      <CartPage />
    </div>
  );
};

export default Cart;

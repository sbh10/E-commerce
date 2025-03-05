import React, { useContext } from "react";
import "./CartPage.css";
import { CartContext } from "../../Context/CartContext";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart, cartTotalAmount } =
    useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>🛒 Mon Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          {cart.map((item) => {
            console.log("Item:", item);
            console.log(
              "new_price:",
              item.new_price,
              "quantity:",
              item.quantity
            );

            return (
              <div key={item.id} className="cart-item">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <p>
                    {item.name} - {item.size}
                  </p>
                  <p>Prix : {item.new_price} €</p>
                  <p>Quantité : {item.quantity}</p>
                  <div className="cart-quantity">
                    <button onClick={() => addToCart(item)}>➕</button>
                    <button onClick={() => removeFromCart(item.id)}>➖</button>
                  </div>
                </div>
                <button onClick={clearCart}>🗑️ Vider le panier</button>
                <hr />

                <div className="cart-total-container">
                  <div className="cart-total">
                    <p>Total des articles</p>
                    <p>{Number(item.new_price) * Number(item.quantity)} €</p>
                  </div>
                  <hr />
                  <div className="cart-total">
                    <p>Frais de livraison</p>
                    <p>offerts</p>
                  </div>
                </div>
                <button id="pay-button">Valider ma commande</button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default CartPage;

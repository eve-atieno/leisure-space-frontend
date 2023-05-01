import React from "react";

export default function CartUser({ total }) {
    return (
      <div className="cart-user">
        <h2>Cart</h2>
        <p>Total price: {total}</p>
      </div>
    );
  }
  
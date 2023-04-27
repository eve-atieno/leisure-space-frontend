import React from 'react';

export default function Cart({ cart, onRemoveFromCart, isLoggedIn }) {
    const total = cart.reduce((total, hotel) => total + parseFloat(hotel.price), 0);

    function handleRemove(hotel) {
        onRemoveFromCart(hotel);
    }

    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.map((hotel) => (
                        <div key={hotel.id}>
                            <img src={hotel.image} />
                            <h3>{hotel.name}</h3>
                            <p>{hotel.description}</p>
                            <p>Price: {hotel.price}</p>
                            {isLoggedIn ? (
                                <button onClick={() => handleRemove(hotel)}>Remove from cart</button>
                            ) : (
                                <p>Please log in to remove items from your cart</p>
                            )}
                        </div>
                    ))}
                    <p>Total: {total}</p>
                </div>
            )}
        </div>
    );
}



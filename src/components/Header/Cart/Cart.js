import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cart =props.cart;
    const total = cart.reduce((total, product) => total + product.price ,0);
    let shipping = 0;
    if( total > 355){
        shipping = 10.99
    }
    else if(total > 15){
        shipping =4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }
    const tax = Math.round(total / 10);
    return (
        <div className="cart-details">
            <h1>Order Summary</h1>
            <h2>Items Orderd: {cart.length}</h2>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Tax: {tax}</p>
            <h3>Price: {Math.round(total + shipping + tax)}</h3>
            <button className="cart-btn">Order Review</button>
        </div>
    );
};

export default Cart;
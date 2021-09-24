import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // let total = 0;
    // for (const product of cart) {
    //     total = total + product.price;
    // }
    const reducer = (previous, current) => previous + current.price;
    const total = cart.reduce(reducer, 0);
    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <h4>Item Ordered : {cart.length}</h4>
            <p>Total Price: {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
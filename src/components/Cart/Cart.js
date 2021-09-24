import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let totalQuantity = 0
    for (const product of cart) {
        console.log(product);
        product.quantity = !product.quantity ? 1 : product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <h4>Item Ordered : {totalQuantity}</h4>
            <p>Total Price: {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Product.css';

const Product = (props) => {
    const { name, img, price, stock, seller } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
      <div className="product">
        <div>
          <img src={img} alt="" />
        </div>

        <div>
          <h2 className="product-name">{name}</h2>
          <p>By : {seller}</p>
          <p>Price : ${price}</p>
          <p>only {stock} left in stock - order soon</p>
                <button className="btn-regular" onClick={() => props.handleAddToCart(props.product)}>{ element} Add to cart</button>
        </div>
      </div>
    );
};

export default Product;
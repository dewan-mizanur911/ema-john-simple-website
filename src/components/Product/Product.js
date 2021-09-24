import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, price, stock, seller,star } = props.product;
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
          <Rating
            initialRating={star}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            readonly
          />
          <br />
          <button
            className="btn-regular"
            onClick={() => props.handleAddToCart(props.product)}
          >
            {element} Add to cart
          </button>
        </div>
      </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchedItems, setSearchedItems] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchedItems(data)
            });
    }, []);

    useEffect(() => {
        const getProduct = getStoredCart();
        const newProduct = [];
        if (products.length) {
                 for (const key in getProduct) {
                   const addedProduct = products.find(
                     (product) => product.key === key
                     );
                     if (addedProduct) {
                         const quantity = getProduct[key];
                         addedProduct.quantity = quantity;
                         newProduct.push(addedProduct);
                     }
                 }   
        }
        setCart(newProduct);
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    };
    const handleOnSearch = event => {
        // console.log(event.target.value);
        const searchedText = event.target.value;
        const newProducts = products.filter(product => product.name.toLowerCase().includes(searchedText.toLowerCase()));
        console.log(newProducts.length);
        setSearchedItems(newProducts);
    }

    return (
        <>
        <div className="search-container">
            <input onChange={handleOnSearch} className="search-field" type="text" placeholder="search products"/> 
        </div>
        <div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        searchedItems.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="order-container">
                    <Cart key={cart.key} cart={cart}></Cart>
                </div>
            </div>
            </div>
            </>
    );
};

export default Shop;
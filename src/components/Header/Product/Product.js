import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="single-product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
            <h2>{name}</h2>
            <br />
            <h4>Brought To You By : {seller}</h4>
            <h3>Price: ${price}</h3>
            <br />
            <h5>Only {stock} Left in Stock</h5>
            <button className="cart-btn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />  Add To Cart</button>
            </div>
            
        </div>
    );
};

export default Product;
import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({cartItem:{imageUrl, price, name, quantity}}) => (
    <div className="cart-item">
        <img className="image" src={imageUrl} alt='item' />
        <div className="item-details">
            <span className="name">{name}</span>
            <span>{price} x {quantity}</span>
        </div>
    </div>
);

export default CartItem;
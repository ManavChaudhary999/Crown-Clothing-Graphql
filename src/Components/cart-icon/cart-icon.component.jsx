import React from "react";
import "./cart-icon.styles.scss";

import {ReactComponent as ShoppingIcon} from "../../Assets/bag.svg";

const CartIcon = ({toggleCartHidden, itemCount}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

export default CartIcon;
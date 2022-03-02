import React from "react";
import {withRouter} from "react-router-dom";
import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.length ? (
                cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} /> )
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )
            }
            </div>
            <CustomButton onClick={()=> 
                {history.push('/checkout');
                 toggleCartHidden();
                }
            }>CHECKOUT</CustomButton>
        </div>
    );
};

export default withRouter(CartDropdown);
import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItems} from "../../redux/cart/cart.selectors";

const CartDropdown = ({cartItems, history, dispatch}) => {
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
                 dispatch(toggleCartHidden());
                }
            }>CHECKOUT</CustomButton>
        </div>
    );
};

// oldWay without reselect
// const mapStateToProps = (state) => ({
//     cartItems: state.cart.cartItems
// });

// New Way with reselect
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
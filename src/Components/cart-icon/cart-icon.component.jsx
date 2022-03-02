import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import "./cart-icon.styles.scss";

import {ReactComponent as ShoppingIcon} from "../../Assets/bag.svg";

import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleCartHidden, itemCount}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => createStructuredSelector({
    itemCount: selectCartItemCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
import {createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    // you can pass multiple or single arguments here or array its a same thing
    //[selectCart, users],
    selectCart,
    cart => cart.cartItems
);

export const selectToggleCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
)

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0)
);
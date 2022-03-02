import cartTypes from "./cart.types";

// This action will be called or dispatch by components like CartIcon whenever toogle button is updated
// And this object will be passsed as an parameter to cartReducer function action argument
export const toggleCartHidden = () => ({
    type: cartTypes.Toggle_Cart_Hidden
});

// This action will be called by components like Shop whenever Add To Cart Button is updated or dispatched
// And this action or object will be passsed as an parameter to cartReducer function action argument
export const addCartItem = (item)=> ({
    type: cartTypes.Add_Cart_Item,
    payload: item
});

export const removeCartItem = item => ({
    type: cartTypes.Remove_Cart_Item,
    payload: item
});

export const clearCartItem = item => ({
    type: cartTypes.Clear_Cart_Item,
    payload: item
});
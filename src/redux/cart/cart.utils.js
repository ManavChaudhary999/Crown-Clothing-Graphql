// Add Item To Cart and increase its quantity if already added
export const AddItemToCart = (cartItems, cartItemToAdd) =>{
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)

    // Then increase quanitity
    if(existingCartItem)
    {
        return cartItems.map(item => 
            item.id === cartItemToAdd.id ?
            {...item, quantity: item.quantity + 1}
            :
            item
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}] // else set quanitity 1 for first time
};

// Clear or remove Item From Cart
export const ClearItemFromCart = (cartItems, cartItemToRemove) => cartItems.filter(item => item.id !== cartItemToRemove.id);

// Reduce Item quantity from cart and remove if its quantity become zero
export const RemoveItemFromCart = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find(item => item.id === cartItemToRemove.id)

    if(existingItem.quantity === 1)
    {
        return ClearItemFromCart(cartItems, cartItemToRemove);
    }

    return cartItems.map(item =>
        item.id === cartItemToRemove.id ?    
            {...item, quantity: item.quantity - 1}
            :
            item
    );
}
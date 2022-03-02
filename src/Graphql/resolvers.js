import {gql} from "apollo-boost";

import {AddItemToCart, RemoveItemFromCart, ClearItemFromCart, GetCartItemsCount, GetCartItemsTotal} from "./cart.utils";

// This is for creating new local mutation or data which can be used by components to mutate(set) data
export const typeDefs = gql`
    extend type Item{
        quantity: Int
    }
    extend type Mutation{
        ToogleCartHidden: Boolen!
        AddItemToCart(item: Item!): [Item]! 
        RemoveItemFromCart(item: Item!): [Item]!
        ClearItemFromCart(item: Item!): [Item]!
    }
`;
// This is actual query to get cartHidden value
const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

// using @client because this is client(local) data
const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`;

const GET_ITEM_COUNT = gql`
    {
        itemCount @client
    }
`;

const GET_ITEM_TOTAL = gql`
    {
        cartTotal @client
    }
`;

export const resolvers = {
    Mutaion: {
        // _root is the root of this mutation
        // _args are the variable that passed from query
        // _context is accessed by Apollo containing cache and client
        // _info is information of query 
        // toggleCartHidden: (_root, _args, _context, _info) =>{}
        toggleCartHidden: (_root, _args, {cache}) =>{ // this is actual Mutation to mutate(set) CartHidden Value
            const {cartHidden} = cache.readQuery({
                query: GET_CART_HIDDEN,
            });
        
            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: {cartHidden: !cartHidden}
            });
            return !cartHidden;
        },
        addItemToCart: (_root, {item}, {cache}) =>{
            const {cartItems} = cache.readQuery({
                query: GET_CART_ITEMS
            });

            const newCartItems = AddItemToCart(cartItems, item);

            cache.writeQuery({
                query: GET_ITEM_COUNT,
                data: {itemCount: GetCartItemsCount(newCartItems)}
            });

            cache.writeQuery({
                query: GET_ITEM_TOTAL,
                data: {cartTotal: GetCartItemsTotal(newCartItems)}
            });

            cache.writeQuery({
                query: GET_CART_ITEMS,
                data: {cartItems: newCartItems}
            });
            return newCartItems;
        },
        removeItemFromCart: (_root, {item}, {cache}) => {
            const {cartItems} = cache.readQuery({
                query: GET_CART_ITEMS
            });
            
            const newCartItems = RemoveItemFromCart(cartItems, item);

            cache.writeQuery({
                query: GET_ITEM_COUNT,
                data: {itemCount: GetCartItemsCount(newCartItems)}
            });

            cache.writeQuery({
                query: GET_ITEM_TOTAL,
                data: {cartTotal: GetCartItemsTotal(newCartItems)}
            });

            cache.writeQuery({
                query: GET_CART_ITEMS,
                data: {cartItems: newCartItems}
            });

            return newCartItems;
        },
        clearItemFromCart: (_root, {item}, {cache}) => {
            const {cartItems} = cache.readQuery({
                query: GET_CART_ITEMS
            });
            
            const newCartItems = ClearItemFromCart(cartItems, item);

            cache.writeQuery({
                query: GET_ITEM_COUNT,
                data: {itemCount: GetCartItemsCount(newCartItems)}
            });

            cache.writeQuery({
                query: GET_ITEM_TOTAL,
                data: {cartTotal: GetCartItemsTotal(newCartItems)}
            });

            cache.writeQuery({
                query: GET_CART_ITEMS,
                data: {cartItems: newCartItems}
            });

            return newCartItems;
        }
    }
};
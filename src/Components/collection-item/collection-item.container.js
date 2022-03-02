import React from "react";
import {Mutation} from "react-apollo";
import {gql} from "apollo-boost";

import CollectionItem from "./collection-item.component";

const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart($item: Item!){
        addItemToCart(item: $item) @client
    }
`;

const CollectionItemContainer = (props) => (
    // <Mutation mutation={ADD_ITEM_TO_CART} variables={{props.item}}> // This is used for static mutation, this component pass the var
    <Mutation mutation={ADD_ITEM_TO_CART}>
    {
        addItemToCart => <CollectionItem {...props} addItem={item => addItemToCart({ variables: {item} })} />
    }
    </Mutation>
);

export default CollectionItemContainer;
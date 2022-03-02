import React from "react";
// import {Mutation, Query} from "react-apollo";
import {compose, graphql} from "react-apollo"; // Replacement of Mutaion and Query for HOC pattern
import {gql} from "apollo-boost";

import CartIcon from "./cart-icon.component";

const TOGGLE_CART_HIDDEN = gql`
{
    mutation ToggleCartHidden { // this is mutation that we write to be used by multiple components
        toggleCartHidden @client // this is actual query we write in resolver to set value
    }
}
`;

const GET_ITEM_COUNT = gql`
    {
        itemCount @client
    }
`;
// ********************WITHOUT HOC PATTERN (if we use only one mutation or query) ********************************
// const CartIconContainer = () => (
//  <Query query={GET_ITEM_COUNT}>
//  {
//      ({data: {itemCount}}) => (
//          <Mutation mutation={TOGGLE_CART_HIDDEN}>
//          {
//              toggleCartHidden => <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
//          }
//          </Mutation>
//      )
//  }
//  </Query>
// );
// ********************WITH HOC PATTERN (if we use many mutation or query) ********************************
const CartIconContainer = ({data: {itemCount}, toggleCartHidden}) => (
    <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
);

export default compose(
    graphql(GET_ITEM_COUNT), // This will pass itemCount as dataObject in props
    // graphql(TOGGLE_CART_HIDDEN) // This will pass toggleCartHidden mutation as mutate in props
    graphql(TOGGLE_CART_HIDDEN, {name: 'toggleCartHidden' }) // so to manually name that we use configuration
)(CartIconContainer);
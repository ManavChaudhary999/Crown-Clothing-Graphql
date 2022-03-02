import React from "react";
import {Query} from "react-apollo";
import {gql} from "apollo-boost";

import CollectionOverview from "./collection-overview.component";
import Spinner from "../with-spinner/with-spinner.component";

const GET_COLLECTIONS = gql`
    {
        collections{
            id
            title
            items{
                id
                name
                price
                imageUrl
            }
        }
    }
`;

const CollectionOverviewContainer = ()=> (
    <Query query={GET_COLLECTIONS}> 
    {
        // This Query Will return function with different values, i.e.
        ({loading, error, data})=> {
            if(loading) return <Spinner />
            return <CollectionOverview collections={data.collections} /> ;
        }
    }
    </Query>
);

export default CollectionOverviewContainer;
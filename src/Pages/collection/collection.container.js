import React from "react";
import {Query} from "react-apollo";
import {gql} from "apollo-boost";

import CollectionPage from "./collection.component";
import Spinner from "../../Components/with-spinner/with-spinner.component";

const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!){ // This is the query we want to be made
        getCollectionsByTitle(title: $title){ // This is the actual query in database
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

const CollectionPageContainer = ({match})=> (
    <Query query={GET_COLLECTION_BY_TITLE} variables={{title: match.params.collectionId }}>
    {
        ({loading, data:{ getCollectionsByTitle }}) => {
            if (loading) return <Spinner />
            return <CollectionPage collection={getCollectionsByTitle} />
        }
    }
    </Query>
);

export default CollectionPageContainer;
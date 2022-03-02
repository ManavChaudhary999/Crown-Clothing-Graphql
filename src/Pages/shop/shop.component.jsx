import React from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

// Only For One time
//import {selectCollectionForPreview} from "../../redux/shop/shop.selectors";
//import {addShopCollectionAndDocument} from "../../Firebase/firebase.utils";

import {firestore, convertCollectionsSnapshotToMap} from "../../Firebase/firebase.utils";
import {UpdateShopCollection} from "../../redux/shop/shop.action";

import WithSpinner from "../../Components/with-spinner/with-spinner.component";

import CollectionPage from "../collection/collection.component";
import CollectionOverview from "../../Components/collection-overview/collection-overview.component";;

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component
{
    // we can use state like this also without using constructor
    state = {
        loading: true
    };

    componentDidMount()
    {   
        // Only For One time
        // const collections = this.props.collections;
        // addShopCollectionAndDocument('collections', collections.map(({title, items}) => ({title, items})));
        
        const {UpdateCollection} = this.props;
        const collectionsRef = firestore.collection('collections');

        collectionsRef.get().then(snapshot => {
            const collectionToMap = convertCollectionsSnapshotToMap(snapshot);
            UpdateCollection(collectionToMap);
            this.setState({loading: false});
        });
    }

    render()
    {
        const {match} = this.props;
        const {loading} = this.state;

        return (
            <div className="shop-page">
                {/* <Route exact path={`${match.path}`} component={CollectionOverview} /> */}
                <Route exact path={`${match.path}`} render={props => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
                <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }
}

// Only For One time
// const mapStateToProps = state => ({
//     collections : selectCollectionForPreview(state)
// });

const mapDispatchToProps = dispatch => ({
    UpdateCollection: shopCollectionMap => dispatch(UpdateShopCollection(shopCollectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
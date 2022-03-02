import React from "react";
import {Route} from "react-router-dom";

import {default as CollectionPage} from "../collection/collection.container";
import {default as CollectionOverview} from "../../Components/collection-overview/collection-overview.container";;

const ShopPage = ()=> (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;
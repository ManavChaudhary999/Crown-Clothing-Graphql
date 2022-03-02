import React from "react";
import {connect} from "react-redux";
import "./collection-overview.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.component";

import {selectCollectionForPreview} from "../../redux/shop/shop.selectors";

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {collections.map(({id, title, items}) => (
            <CollectionPreview key={id} title={title} items={items} />
            ))
        }
    </div>
);

const mapStateToProps = (state) => ({
    collections: selectCollectionForPreview(state)
});

export default connect(mapStateToProps)(CollectionOverview);
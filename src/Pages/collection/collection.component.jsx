import React from "react";
import {connect} from "react-redux";
import "./collection.styles.scss";

import CollectionItem from "../../Components/collection-item/collection-item.component";
import {selectCategory} from "../../redux/shop/shop.selectors";

const CollectionPage = ({collection}) => (
    <div className="collection-page">
        <h2 className="title">{collection.title}</h2>
        <div className="items">
            {
                collection.items.map(item => 
                <CollectionItem key={item.id} item={item} />
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCategory(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
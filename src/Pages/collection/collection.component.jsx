import React from "react";
import "./collection.styles.scss";

import {default as CollectionItem} from "../../Components/collection-item/collection-item.container";

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

export default CollectionPage;
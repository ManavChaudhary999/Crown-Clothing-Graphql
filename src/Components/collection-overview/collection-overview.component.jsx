import React from "react";
import "./collection-overview.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {collections.map(({id, title, items}) => (
            <CollectionPreview key={id} title={title} items={items} />
            ))
        }
    </div>
);

export default CollectionOverview;
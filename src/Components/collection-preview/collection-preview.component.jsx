import React from "react";
import {withRouter} from "react-router-dom";
import "./collection-preview.styles.scss";

import {default as CollectionItem} from "../collection-item/collection-item.container";

const CollectionPreview = ({title, items, history, match})=>
{
    return(
        <div className="collection-preview">
            <h1 className="title" onClick={()=> history.push(`${match.path}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>    
            <div className="preview">
                {items
                    .filter((item, index) => (index < 4))
                    .map((item) =>(
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
}

export default withRouter(CollectionPreview);
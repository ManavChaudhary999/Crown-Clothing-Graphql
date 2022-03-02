import React from "react";
import "./collection-item.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({item, addItem}) =>
{
    const {name, imageUrl, price} = item;

    return(
        <div className= "collection-item">
            <div className= "image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={()=> addItem(item)}>Add to Cart</CustomButton>
        </div>
    );
}

export default CollectionItem;
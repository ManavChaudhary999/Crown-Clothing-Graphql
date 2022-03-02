import React from "react";
import {withRouter} from "react-router-dom";
// if use link instead of history.push
// import {Link} from "react-router-dom;"
import "./menu-item.styles.scss";

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) =>
{
    return(
        // if use link instead of history.push
        // <Link to={`${linkUrl}`}> 
        <div className={`menu-item ${size}`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image"
                style={{backgroundImage: `url(${imageUrl})`}}    
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
        // if use link instead of history.push
        // </Link> 
    );
};

export default withRouter(MenuItem);
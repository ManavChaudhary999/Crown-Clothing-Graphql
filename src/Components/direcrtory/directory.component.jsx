import React from "react";
import {connect} from "react-redux";
import "./directory.styles.css";

import MenuItem from "../menu-item/menu-item.component";

import {selectSections} from "../../redux/directory/directory.selectors";

const Directory = ({sections}) => (
    <div className="directory-menu">
        {sections.map(({id, ...otherProps}) => <MenuItem key={id} {...otherProps} />)}
    </div>
);

const mapStateToProps = (state) => ({
    sections: selectSections(state)
});

export default connect(mapStateToProps)(Directory);
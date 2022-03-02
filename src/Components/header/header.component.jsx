import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import "./header.styles.scss";

import {ReactComponent as Logo} from "../../Assets/logo.svg";
import {auth} from "../../Firebase/firebase.utils";
import {default as CartIcon} from "../cart-icon/cart-icon.container";
import {default as CartDropdown} from "../cart-dropdown/cart-dropdown.container";

import {selectCurrentUser} from "../../redux/user/user.selectors";

const Header = ({currentUser, hidden}) =>(
    <div className="header">    
        <Link to="/"><Logo className="logo-container" /></Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contacts">CONTACTS</Link>
            {
                currentUser ?
                    <div className="option" onClick={()=> auth.signOut()}>SIGNOUT</div>
                    :
                    <Link className="option" to="/signin">SIGNIN</Link>
            }
            <CartIcon className="option" />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
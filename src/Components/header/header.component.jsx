import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import "./header.styles.scss";

import {ReactComponent as Logo} from "../../Assets/logo.svg";
import {auth} from "../../Firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {selectToggleCartHidden} from "../../redux/cart/cart.selectors";
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

// oldWay without reslect
// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
// });

// New Way with reslect but without createStructuredSelector
// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectToggleCartHidden(state)
// });

// New Way with reslect with createStructuredSelector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectToggleCartHidden
});

export default connect(mapStateToProps)(Header);
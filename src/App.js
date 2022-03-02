import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import './App.css';

import ShopPage from "./Pages/shop/shop.component";
import CheckoutPage from "./Pages/checkout/checkout-page.component";

import Header from "./Components/header/header.component";
import Homepage from "./Pages/homepage/homepage.component";
import SignInSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./Firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount()
    {
      const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if(userAuth)
          {
            const userRef = await createUserProfileDocument(userAuth);
            userRef.onSnapshot(snapshot => {
              setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
              });
            });
          }
          else
          {
            setCurrentUser(userAuth);
          }
        });
    }
    
    componentDidUnMount()
    {
        this.unsubscribeFromAuth();
    }


  render()
  {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)} />
        </Switch>
      </div>
    );
  }
}

// Old Way without reselect
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser
// });

// New Way with reselect
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

// here setCurrentUser is a prop we want to pass in app(or this) component and setCurrentUser(user) is an action
const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import "./sign-in-and-sign-up.styles.css";

import SignIn from "../../Components/Sign-in/sign-in.component";
import SignUp from "../../Components/Sign-up/sign-up.component";

const SignInSignUp = ()=>(
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUp;
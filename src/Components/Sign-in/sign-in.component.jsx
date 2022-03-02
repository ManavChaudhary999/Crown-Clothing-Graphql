import React from "react";
import "./sign-in.styles.scss"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../Firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    handleSubmit = async event =>
    {
        event.preventDefault();

        const {email, password} = this.state;
        
        await auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            alert(error.message);
            return;
        });
        
        this.setState({
            email: "",
            password: "",
        });        
    }
    
    render()
    {
        const {email, password} = this.state;

        return(
            <div className="sign-in">
                <h2>Already An Account</h2>
                <span>Sign In With Email And Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="Email" value={email} onChange={this.handleChange} required />
                    <FormInput type="password" name="password" label="Password" value={password} onChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomButton type="submit">SignIn</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >SignIn</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
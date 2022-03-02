import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51H6xVdBFiVHNNowaPEsigI6g3RtwusCBBpfFvaInKa1mEZ8YvvS1k934qPEioAQb7F7ILcZe6uQTfAEsOo7Av4CA00TGgbCZ4c";

    const onToken = token =>{
        console.log(token);
        alert("Payment Successful");
    };
    // This is a legacy method of stripe, now updated version available
    return(
        <StripeCheckout 
            label="Pay Now"
            name="ClothingApp Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;
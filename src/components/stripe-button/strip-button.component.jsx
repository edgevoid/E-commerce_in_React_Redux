import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publisheableKey = 'pk_test_CoWuYVm9Uh6wefRthH0XtAjI006rB7Wl0g';
    
    const onToken = token => {
        console.log(token);
        alert('payment Successful');
    }
    return (
        <StripeCheckout
        label= 'Pay now'
        name= 'e-commerce'
        billingAddress
        shippingAddress
        image=''
        description={`your total price is ${price}`}
        amount ={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        />
    );
};

export default StripeCheckoutButton;
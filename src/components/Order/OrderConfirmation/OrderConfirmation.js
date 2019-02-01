import React from 'react';
import classes from './OrderConfirmation.css';

const orderConfirmation = props => {

    return (
        <div className={classes.OrderConfirmation}>
            <h2 className="animated pulse">Thank you for ordering our amazing burger!</h2>
            <p>Your order will be delivered to you within an hour from now</p>
            <h3>We hope you enjoy it!</h3>
        </div>    
    );    
};

export default orderConfirmation;
import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName, 
            amount: props.ingredients[ingredientName]
        });
    }
    const ingredientOutput = ingredients.map(ig => {
       if (ig.amount > 0) {
           return <span 
            className={classes.Ingredient}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
       }
    });
    
    return (
        <div className={classes.Order}>
            <p><em>Date:</em> {props.date}</p>
            <p><em>Ingredients:</em> {ingredientOutput}</p>
            <p><em>Price:</em> USD {Number.parseFloat(props.price).toFixed(2)}</p>
        </div>
    );
};

export default order;
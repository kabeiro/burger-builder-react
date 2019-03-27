import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    /* to output ingredients dynamically on a screen, the object received by props 
    needs to be converted into an array with as many elements as held by the value 
    of a given key, then this array is mapped to BurgerIngredient component */
    let transIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    
    if (transIngredients.length === 0) {
        transIngredients = <p>Please start adding ingredients.</p>;
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>    
    );
};

export default burger;
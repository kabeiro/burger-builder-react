import React from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

const burgerIngredient = props => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat + " animated bounceInLeft"}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese + " animated bounceInRight"}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon + " animated bounceInLeft"}></div>;
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad + " animated bounceInRight"}></div>;
            break;
        case ('tomatoes'):
            ingredient = <div className={classes.Tomatoes + " animated flipInX"}></div>;
            break;
        case ('pickles'):
            ingredient = <div className={classes.Pickles + " animated flipInX"}></div>;
            break;
    }

    return ingredient;
};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngredient;

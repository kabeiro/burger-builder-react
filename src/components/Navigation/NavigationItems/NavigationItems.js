import React from 'react';
import classes from './NavigationItems.css';

const NavigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a href={props.link} 
            className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;
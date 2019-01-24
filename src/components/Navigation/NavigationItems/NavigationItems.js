import React from 'react';
import classes from './NavigationItems.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink to={props.link}
        exact={props.exact}
        activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        { !props.isAuthenticated 
            ? <NavigationItem link="/auth">Sign Up</NavigationItem> 
            : <NavigationItem link="/logout">Log Out</NavigationItem> }
    </ul>
);

export default navigationItems;
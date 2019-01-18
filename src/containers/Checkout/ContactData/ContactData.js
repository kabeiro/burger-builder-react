import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            // in production the price should be calculated on the server side
            price: this.props.price,
            customer: {
                name: 'Ned Stark',
                address: 'Winterfell of the North',
                email: 'ned@stark.com',
                deliveryMethod: 'fastest'
            }
        };
        axios.post('/orders.json', order).then(
            response => {
                this.setState({loading: false});
                this.props.history.push('/');
            }).catch(
                error => {
                    this.setState({loading: false});
                });
    }
    
    render() {
        let form = (<form>
                    <input className={classes.Input} type="text" name="name" placeholder="Name and Surname" />
                    <input className={classes.Input} type="email" name="email" placeholder="Email Address" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER NOW</Button>
                </form>);
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data:</h4>
                {form}
            </div>    
        );
    }
}

export default ContactData;
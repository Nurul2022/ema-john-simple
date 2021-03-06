import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    console.log(props.children)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.15).toFixed(2)); // 15% tax will be added 15/100=0.15 
    const grandTotal = (total + shipping + tax);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>  
            {/* // cart.length */}
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            {props.children}
        </div>
    );
};

export default Cart;
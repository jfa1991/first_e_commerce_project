import React from 'react';
import CartItemVerifyOrder from './CartItemVerifyOrder.js';




function CartListVerifyOrder({value}) {

	const {cart} = value

	return(
		<div>
		  {cart.map(item => 
		  	<CartItemVerifyOrder key = {item.id} item ={item} value = {value}/>)}

		</div>
	)
}

export default CartListVerifyOrder;


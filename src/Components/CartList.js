import React from 'react';
import CartItem from './CartItem.js';

{/* Props pass as value in Cart to To CartList and containing entire ProductStore  in Function CartList ({value}) ...*/}

function CartList ({value}) { 
	const {cart} = value


	return(
		<div style = {{backgroundColor: '#E2BEA8'}} className = ''>
		     {cart.map(item =>
		     	<CartItem key = {item.id} item ={item} value = {value}/>)}
{/* Two Props pass to CartItem from Cartlist, their name item and value containing object item and value ...*/}

		</div>
	)
}

export default CartList
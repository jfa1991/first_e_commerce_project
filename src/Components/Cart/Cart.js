import React from 'react';

import CartColumns from './CartColumns.js';
import EmptyCart from './EmptyCart.js';
import {StoreProductsContext} from '.../ContextProvider/StoreProductsContext.js';


import Title from '../Title.js';



function Cart(props) {
	return(
		<div>
		  <section>
		  	<Title name='Your' title = 'Cart'/>
		  	<CartColumns />
		  	<EmptyCart />
		  </section>
		</div>

	)
}

export default Cart;
import React from 'react';
import {Link} from 'react-router-dom';

import {FaShoppingCart} from 'react-icons/fa'


import {ButtonContainer} from './Button.js';


function EmptyCart () {
	return(
		<div className ='general-wrapper div-empty-cart-e-commerce'>

			<div className = 'div-message-empty-fill-it-up-empty-cart-e-commerce'>
				<h2 className ='cart-empty-message-empty-cart-e-commerce'>Your Bag Is Currently Empty</h2>
				<Link className = 'empty-car-link-to-products-list-e-commerce' to ='/products'>
			  		<p className= 'empty-cart-p-Visit-to-product-list-e-commerce'> Fill It Up!</p>
			 	</Link>
			</div>

		</div>
	)
} 

export default EmptyCart;


  
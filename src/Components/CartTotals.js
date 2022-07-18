import React from 'react';
import {Link} from 'react-router-dom';


import PayPalButtonT from './PayPalButtonT.js';


function CartTotals({value}) {
	const {cartSubTotal,cartTax,cartTotal, clearCart} = value


	return(
		<React.Fragment>
			<div style = {{backgroundColor: '#E2BEA8'}}   className = 'wrapper-cart-totals-e-commerce'>
				<div className ='div-button-sub-shipping-total-cart-totals-e-commerce'>
				{/*	<Link className ='link-button-clear-cart-cart-totals-e-commerce' to = '/'>
						<button className = 'button-clear-cart-cart-totals-e-commcerce'type = 'button' onClick = {() => clearCart()}>Clear Entire Cart</button>
					</Link>
				

					<div className = 'div-clear-continue-cart-totals-e-commerce'>
						<p className = 'button-clear-cart-cart-totals-e-commcerce'type = 'button' onClick = {() => clearCart()}>Clear Cart</p>
						<Link className = 'link-to-products-continue-shooping-cart-totals-e-commerce' to = '/products'> 
		  					<p className = 'continue-shooping-cart-totals-e-commerce'>Continue Shooping</p>
		  				</Link>
		  			</div>

		  			*/}



		  			<div className = 'div-for-subtotal-shipping-and-total-e-commerce'>
						<div className = 'div-cart-totals-e-commerce'>
							<span>Subtotal </span>
							<span className ='price-bottom-page-cart-totals-e-commerce'>${cartSubTotal}</span>
						</div>

						<div className = 'div-cart-totals-e-commerce'>
							<span>Shipping </span>
							<span className ='price-bottom-page-cart-totals-e-commerce'>${cartTax}</span>
						</div>

						<div className = 'div-cart-totals-e-commerce top-border-total-cart-totals-e-commerce'>
							<strong>Total (including VAT) </strong>
							<strong className ='price-bottom-page-cart-totals-e-commerce total-final-price-bottom-page-cart-totals-e-commerce'>${cartTotal}</strong>
						</div>

					</div>



				</div>
			</div>

		</React.Fragment>
	)
}

export default CartTotals;
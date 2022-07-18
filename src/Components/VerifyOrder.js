import React, {useContext} from 'react';

import {StoreProductsContext} from '../ContextProvider/StoreProductsContext.js';

import CartTotals from './CartTotals.js';

import CartListVerifyOrder from './CartListVerifyOrder.js'

import {FaShoppingBag} from 'react-icons/fa';

import PayPalButtonT from './PayPalButtonT.js';




function VerifyOrder (props) {

	const ProductStore = useContext(StoreProductsContext);
	
	const {checkoutFormValues,handleInputChange, checked, clearInputsForm, cartTotal, clearCart} = ProductStore;

	const {firstName,lastName,country,email,cityBilling,cityNumberBilling,zipBilling,addressBilling,cityShipping,addressShipping,zipShipping} = checkoutFormValues;

	return(
			<div className = 'general-div-verify-order-e-commerce'>
		  		<section className = 'section-infos-verify-order-e-commerce general-wrapper'>

		    		<div className = 'div-infos-names-address-verify-order-e-commerce'>

		    			<h2 className ='h2-title-verify-order-e-commerce'>Verify my order </h2>
		      
		     		

		                <h3 className = 'title-billing-address-verify-order-e-commerce'>Address</h3> 
		      
		      			<p className = 'first-last-names-verify-order-e-commerce'>{firstName} {lastName}</p> 
		      			<p className = 'billing-address-verify-order-e-commerce'>{addressBilling} {cityNumberBilling}</p>
		      			<p className = 'billing-zip-city-verify-order-e-commerce'>{zipBilling} {cityBilling}</p> 
		      			<p className = 'country-verify-order-e-commerce'>{country}</p>
		    			<p className = 'email-verify-order-e-commerce'>{email}</p>
		    			<h3 className = 'my-bag-section-one-verify-order-e-commerce'>My Bag </h3>
		    		</div>

		    
		    	{/*	<p className = 'email-verify-order-e-commerce'>{email}</p> */}

		    	{/*	<h3 className = 'my-bag-verify-order-e-commerce'>My Bag </h3> */}

				</section>

			<section className = 'section-my-order-verify-order-e-commerce general-wrapper'>

			  <div className = 'div-section-two-h3-cart-list-cart-totals-pay-pal'>
				<h3 className = 'my-bag-section-two-verify-order-e-commerce'>My Bag </h3>

		 		<CartListVerifyOrder value = {ProductStore} />

		 		<CartTotals value = {ProductStore} />

		 		<span className = 'span-Paypalbutton-verify-order-e-commerce'>
		 			<PayPalButtonT className = 'hello' cartTotal ={cartTotal} clearCart ={clearCart} clearInputsForm = {clearInputsForm}  />
		 		</span> 
		 	</div>

			</section>

		</div>

	) 
}

export default VerifyOrder;
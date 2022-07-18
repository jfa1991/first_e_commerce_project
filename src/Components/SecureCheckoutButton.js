import React,{useContext} from 'react';

import {Link} from 'react-router-dom';

import {StoreProductsContext} from '../ContextProvider/StoreProductsContext.js';


function SecureCheckoutButton (props) {
	
	const ProductStore = useContext(StoreProductsContext); 

	const {addShippingFee} = ProductStore
	
	return(
		<div className = 'div-secure-checkout-out-e-commerce'>
		   <Link className = 'link-proceed-to-check-out-cart-totals-e-commerce' to ='/checkout'>
				<p className = 'proceed-to-check-out-cart-totals-e-commerce' onClick ={addShippingFee}>Proceed to secure checkout</p>
		   </Link>
		</div>
	)

}

export default SecureCheckoutButton ;

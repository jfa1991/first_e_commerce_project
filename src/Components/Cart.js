import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import CartColumns from './CartColumns.js';
import CartList from './CartList.js';
import CartTotals from './CartTotals.js';
import EmptyCart from './EmptyCart.js';
import Title from './Title.js';

import GalleryProducts from './GalleryProducts.js';

import SecureCheckoutButton from './SecureCheckoutButton.js';



import {ButtonContainer} from './Button.js';



import {StoreProductsContext} from '../ContextProvider/StoreProductsContext.js';


import picture from '../Images/skincare.png';




function Cart(props) {

	const ProductStore = useContext(StoreProductsContext); 

	const {storeProduct, detailsProduct,cart, modalOpen,modalProduct, cartTax, numberItemsInCart, hideSecureCheckout} = ProductStore;




	return(
		<div>

			{(cart.length > 0) ? <section className = 'section-cart-component-e-commerce'> 

		  		<React.Fragment>
		  		  <div className = 'general-wrapper-cart-e-commerce'>
		 			<Title name='My' title = 'Bag'/>
		  			<CartColumns />
		  			<CartList value = {ProductStore} /> {/* Passing to CartList a props with the name value having the entire Object ProductStore as a value */}
		  			<CartTotals value = {ProductStore} />


		  			
		  			

		  			<SecureCheckoutButton />
		 		 </div>
		  		</React.Fragment>

		  		</section>

		  		: <section> 

		  			<EmptyCart />

		  		</section> }
		</div>

	)
}

export default Cart;
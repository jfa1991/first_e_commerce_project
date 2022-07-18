import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button.js';

import {GiOrangeSlice} from 'react-icons/gi'; 
import {FaSearch} from 'react-icons/fa';

import {FaShoppingBag} from 'react-icons/fa';

import {FaShoppingCart} from 'react-icons/fa'

import {StoreProductsContext} from '../ContextProvider/StoreProductsContext.js';




function Navbar(props) {

	const ProductStore = useContext(StoreProductsContext); 

	const {cartTotal,cartSubTotal,numberItemsInCart, proceedCheckout, storeProduct, cart} = ProductStore


	const numberTotalItems = storeProduct.map(indexObject => 
		indexObject.count)


	return(
		<div>
			<nav className = 'general-wrapper navbar-e-commerce'>
				
				<div className = 'div-logo-name-navbar-e-commerce'>
					<Link className = 'link-logo-biyou-navbar-e-commerce' to ='/'>
				
						<i>
							<GiOrangeSlice className = 'navbar-logo-e-commerce' size = {40}  color = {'#CD6547'}  />
						</i>
						<span style = {{color: '#555D50'}} className = 'biyou-navbar-e-commerce'>Biyou</span>
					</Link>
				</div>


				<div className = 'div-search-cart-icon-cart-total-navbar-e-commerce'>


			{/*		<i>
					 <FaSearch className = 'navbar-logo-e-commerce' size = {20}  color = {'#555D50'} />
					</i>
				*/}

					<Link className = 'link-navbar-e-commerce' to ='/cart'>
				   		<button className = 'button-icon-my-cart'>
				      		<i className= 'icon'>
						 	  <FaShoppingBag size = {25}  color = {'#555D50'} />
						 	{numberItemsInCart ? 
						 					<span className = 'cart-total-items-navbar-e-commerce'> {numberItemsInCart}</span> 

						 				: null }
							
							</i>
				   		</button>
					</Link>

				{numberItemsInCart ? 
					<div className = 'div-subTotal-total-cart-navbar-e-commerce'>
						
					{!proceedCheckout ? <span className = 'cart-total-price-navbar-e-commerce'> ${cartSubTotal}</span>

						: <span className = 'cart-total-price-navbar-e-commerce'> ${cartTotal}</span> }
					</div> :null }				
				</div>

			</nav>
		</div>
	)
}

const NavWrapper = styled.nav `
	
	display:flex;
	background:#CDEEF3;
	padding: .5em;
	.li-ul-NavWrapper {
		color:yellow;
	}

	border:1px solid black;
	display:flex;


.p-link-NavWrapper {
		
		text-transform:capitalize;
	}



` 



export default Navbar;
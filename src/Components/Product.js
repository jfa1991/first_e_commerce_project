import React, {useContext} from 'react';

import {Link} from 'react-router-dom';

import {StoreProductsContext} from '../ContextProvider/StoreProductsContext.js';

import {PropTypes} from 'prop-types';

import {FaShoppingCart} from 'react-icons/fa';
import {FaShoppingBag} from 'react-icons/fa';


import styled from 'styled-components';

import background from '../Images/products_page_background.jpg';






function Product(props) {

	const ProductStore = useContext(StoreProductsContext); 

	const {storeProduct, detailsProduct, handleDetail, addToCart, openModal, cart, addNumberItems} = ProductStore


	const {id,title,img,price} = storeProduct








{/*	const [objStoreProduct_1,objStoreProduct_2,objStoreProduct_3,objStoreProduct_4,objStoreProduct_5,objStoreProduct_6,objStoreProduct_7,objStoreProduct_8] = storeProduct*/}
{/*onClick={()=> console.log('You clicked me on the image container')} */}
{/* onClick={() => {console.log('added to the cart')} */}


	{/* const products corresponds to the mapping of array storeProduct present in context object ProductStore, each index is an object and for each we create a container with links/img */}


	const products = ProductStore.storeProduct.map(indexObject=>  

		
		<div key = {indexObject.id} className = 'img-container-product-e-commerce' onClick = {() => handleDetail(indexObject.id)}>
			
				<Link className = 'link-to-details-product-e-commerce' to ='/details'>
					<img key ={indexObject.id} className ='img-card-product-e-commerce'src ={indexObject.img} />
					<p className = 'find-out-card-product-e-commerce'>Find Out More About</p>
				</Link>
				<button className ='card-btn-product-e-commerce'
					
					disabled={indexObject.inCart ? true : false}
					onClick={() => {
						addToCart(indexObject.id);
						openModal(indexObject.id);
						
					}}>
				
					{indexObject.inCart ? (


						<i  disabled>
							<FaShoppingBag size = {19}  color = {'#555D50'} />
						</i>
					):( 
						<i >
							<FaShoppingBag  size = {19}  color = {'#E4DACD'} />
						</i>
					)} 
				</button>

				<div className = 'card-name-price-product-e-commerce'>
			 		<p className = 'title-card-product-e-commerce'>{indexObject.title}</p>
			 		<p className = 'contenance-card-product-e-commerce'>{indexObject.quantity}</p>
			 		<p className = 'price-card-product-e-commerce'>${indexObject.price}</p>
				</div>
		</div>
	)




	return(
		<ProductWrapper>
			<div className = 'genaral-wrapper-product-e-commerce'>
				<div className ='general-wrapper container-for-card-product-e-commerce'>

					<div className = 'wrapper-bouncy-skin-title-product-e-commerce'>
						<h2 className = 'bouncy-skin-product-e-commerce'>Have a Bouncy Skin!</h2>

					</div>
					{products}
				</div>



			</div>




		</ProductWrapper>

	)
}







const ProductWrapper = styled.div`
	
	

`

export default Product;




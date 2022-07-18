import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {StoreProductsContext} from '../ContextProvider/StoreProductsContext.js';
import {ButtonContainer} from './Button.js';




function Details(props) {

	const product = useContext(StoreProductsContext); 

	const{storeProduct,detailsProduct,addToCart,} = product

	const {id,title,img,quantity,price,info,infoUse,company,inCart} = detailsProduct


	

	return(
		<div>
			<div className = 'div-wrapper-details-product-e-commerce'>

				<div className = 'wrapper-title-img-box-price-contenance-e-commerce'>

			  		<h1 className = 'title-details-products-e-commerce'>{title}</h1> 

			  	
					
					<div className ='div-img-details-products-e-commerce'>
						<img className = 'img-details-products-e-commerce' src = {img} alt ='product'/>
					</div>



					<div className = 'price-quantity-box-details-products-e-commerce'>
			  			<p>Contenance: {quantity}</p>
			  			<p>Price: ${price}</p>
			  		</div> 

			  		<div className = 'wrapper-buttons-large-screen-details-product-e-commerce'>
			  			<Link to ='/products'>
			  				<ButtonContainer className='button-continue-shop-modal-e-commerce'>Back to Products</ButtonContainer>
			  			</Link>
			  	
			  			<ButtonContainer cart disabled = {inCart ? true : false} onClick ={()=> {addToCart(id)}}>
							{inCart ? 'inCart' : 'Add to Cart'}
			  			</ButtonContainer>
			  		</div>

			  	</div>

			  	<div className = 'wrapper-paragraph-info-buttons-e-commerce'>


					<div className = 'div-infos-details-products-e-commerce'>
						<p className = 'info-details-products-e-commerce'>{info}</p>
						<p className ='info-use-for-details-products-e-commerce'>{title} can be used to {infoUse}</p>
				
				{/*	<div className = 'price-quantity-box-details-products-e-commerce'>
			  			<p>{quantity}</p>
			  			<p>${price}</p>
			  		</div> */}


			  			<div className = 'wrapper-buttons-details-product-e-commerce'>
			  				<Link to ='/products'>
			  					<ButtonContainer className='button-continue-shop-modal-e-commerce'>Back to Products</ButtonContainer>
			  				</Link>
			  	
			  				<ButtonContainer cart disabled = {inCart ? true : false} onClick ={()=> {addToCart(id)}}>
								{inCart ? 'inCart' : 'Add to Cart'}
			  				</ButtonContainer>
			  			</div>

					</div> 

				</div>

			</div>
		</div>

	)
}

export default Details;
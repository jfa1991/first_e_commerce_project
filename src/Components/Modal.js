import React , {useContext} from 'react';

import {StoreProductsContext} from '../ContextProvider/StoreProductsContext.js';

import {ButtonContainer} from './Button.js';

import {Link} from 'react-router-dom';

import styled from 'styled-components';


function Modal (props) {

	const ProductStore = useContext(StoreProductsContext); 

	const {handleDetail, AddToCart,modalOpen, modalProduct, openModal,closeModal} = ProductStore
	
	const {img,title,quantity,price} = modalProduct

	return(
		<div>
			{modalOpen ? <ModalContainer onClick = {() => closeModal()}> 
				    <div className = 'div-wrapper-modal-e-commerce' id = 'modal'>
						<h4 className = 'h4-item-added-to-modal-e-commerce' >Item Added To The Cart</h4>
						<img className = 'img-modal-e-commerce' src = {img} alt = 'product'/>
						<h5 className = 'title-modal-e-commerce'>{title}</h5>
						<h5 className = 'contenance-modal-e-commerce'>{quantity}</h5>
						<h5 className = 'price-modal-e-commerce'>${price}</h5>
						
						<div className = 'wrapper-buttons-modal-e-commerce'>
							

							<Link to = '/cart'>
								<ButtonContainer cart onClick = {() => closeModal()}>
							  		Go to Cart
								</ButtonContainer> 
							</Link>

							<Link to = '/products'>
								<ButtonContainer className = 'button-continue-shop-modal-e-commerce' onClick = {() => closeModal()}>
							  		Continue Shopping
								</ButtonContainer> 
							</Link>
						</div>

					</div>

			</ModalContainer> : null}
		</div>
	)
}

const ModalContainer = styled.div`

	position:fixed;
	top:1%;
	left:0;
	right:0;
	bottom:0;
	background:rgba(0,0,0,0.3);
	display:flex;
	align-items: center;
	justify-content: center;
	#modal {
		background: #E4DACD;  
	};
	&:hover {
		cursor:pointer;

`;

export default Modal; 
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {GiOrangeSlice} from 'react-icons/gi'; 
import {StoreProductsContext} from '../ContextProvider/StoreProductsContext.js';


function Home (props) {

	const ProductStore = useContext(StoreProductsContext); 

	const {removeShippingFee} = ProductStore

	return(
		<div>
			
			
			<div className = 'home-div-h2-Link-to-products-e-commerce'>
				<h2 className = 'home-h2-slogoan-list-e-commerce'>Take Care Of Your Beautiful Skin</h2>

				<Link className = 'home-link-to-products-list-e-commerce' to ='/products'>
					<p className ='home-p-Visit-to-product-list-e-commerce' onClick = {removeShippingFee}>Treat Yourself </p>
				</Link>
			</div>
		</div>

	);
};

export default Home;



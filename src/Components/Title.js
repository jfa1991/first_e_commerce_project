import React, {useContext} from 'react';
import '../App.css';

import picOne from '../Images/skincare.png';
import picTwo from '../Images/skin_care_5.png';
import picThree from '../Images/skin_care_6.png';
import picFour from '../Images/skin_care_8.png';

import {StoreProductsContext} from '../ContextProvider/StoreProductsContext.js';


 

function Title ({name,title}) {  {/*function Title({name,title} */}
	
	const ProductStore = useContext(StoreProductsContext); 

	const {cart} = ProductStore;



	return(
		<div style = {{backgroundColor: '#E2BEA8'}} className = 'general-wrapper'>
			<div className = 'wrapper-title-my-bag-e-commerce'>
				<h1 className = 'product-list-component-text-title-e-commerce'> {name} <strong>{title}</strong></h1>
			</div>
		</div>
	)
}

export default Title

		 	
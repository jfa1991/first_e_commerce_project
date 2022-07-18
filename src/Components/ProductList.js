import React, {useState, useContext} from 'react';
import Product from './Product.js';
import Title from './Title.js';








function ProductList(props) {


	return(
		<React.Fragment>
			{/* <div></div> container*/}
			
			<div className = 'component-productlist-container'>
				{/*<Title name ='We Are' title ='Beautiful'/> */}
			</div>
			
			{/* container*/}
			
			<Product/>



		
		</React.Fragment>

	)
}

export default ProductList;
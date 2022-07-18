import React, {useContext} from 'react';


import {StoreProductsContext} from '../ContextProvider/StoreProductsContext.js';


function GalleryProducts(props) {

	const ProductStore = useContext(StoreProductsContext); 

	const {storeProduct, detailsProduct, handleDetail, addToCart, openModal, cart, addNumberItems} = ProductStore


	const {id,title,img,price} = storeProduct


	const galleryProducts = ProductStore.storeProduct.map(indexObject=>  

		
		<div key = {indexObject.id} className = 'img-gallery-container-product-e-commerce'>
			<img key ={indexObject.id} className ='img-card-gallery-product-e-commerce'src ={indexObject.img} />
		</div>
	)



	return(
		<div className = 'genaral-wrapper-gallery-product-e-commerce'>
			{galleryProducts}
		</div>

	)
}

export default GalleryProducts;






import React, {useContext} from 'react';

function CartItemVerifyOrder({item,value}) {

	const {id,title,img,price,total,count, quantity} = item;

	return(
		<div className = 'card-for-item-in-verify-to-cart-e-commerce'>
		    <div className = 'div-img-cart-item-verify-e-commerce'>
		       <img className = 'img-card-for-item-in-verify-order-e-commerce' src = {img} alt = 'product'/>
		     </div>

		     <div className = 'card-name-contenance-numbers-of-products-total-price-e-commerce'>
			    <p className = 'title-card-for-item-in-verify-order-e-commerce'>{title}</p>
			    <p className = 'contenance-card-for-item-in-verify-order-e-commerce'>{quantity}</p>
			    <p className = 'count-card-for-item-in-verify-order-e-commerce'>Quantity: <strong>{count}</strong></p> 
			    <p className = 'total-price-per-item-card-for-item-in-verify-order-e-commerce'>Item Total: <strong>${total}</strong></p>
			 </div>

		</div> 
	)
}


export default CartItemVerifyOrder;

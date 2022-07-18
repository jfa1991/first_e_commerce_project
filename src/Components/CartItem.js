import React, {useContext} from 'react';

import {FaPlus} from 'react-icons/fa';
import {FaMinus} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';




function CartItem ({item,value}) {
	
	const {id,title,img,price,total,count, quantity} = item;
	const {increment,decrement,RemoveItem} = value;

	return(
		<div className = 'wrapper-cart-item-e-commerce'>

		
			<div style = {{backgroundColor: '#E2BEA8'}} className = 'card-for-item-added-to-cart-e-commerce'>

				<div className = 'div-img-cart-e-commerce'>
					<img className = 'img-card-for-item-added-to-cart-e-commerce' src = {img} alt = 'product'/>
				{/*	<p className = 'total-per-item-cart-e-commerce'>Item total: ${total} </p> */}

				</div>
				
			
				<div className ='div-product-price-incr-decr-cart-item-e-commerce'>
					<div className ='div-product-price-total-per-item-cart-item-e-commerce'>
						<span className = 'product-cart-item-e-commerce'>{title} </span>
						
						{/*<span className = 'contenance-cart-item-e-commerce'>{quantity} </span> 
						<span className = 'price-cart-item-e-commerce'>${price} </span> */}
					
						<p className = 'total-per-item-cart-e-commerce'>Item total: <strong>${total} </strong></p>
					</div>

					
					
			
					

					<div className = 'div-btn-decrement-increment-cart-item-e-commerce'> 
						<FaMinus className ='btn-decrement-increment-cart-item' onClick ={() => decrement(id)}/>
						
						<span className = 'item-added-per-object-cart-item-e-commerce'>{count}</span>

						
						<FaPlus className ='btn-decrement-increment-cart-item' onClick ={() => increment(id)}/>
					</div> 

				</div>

				<div className ='div-trash-icon-cart-item-e-commerce'>
					<div className = 'cart-trash-cart-item' onClick ={() => RemoveItem(id)}>
						<i><FaTrash color = {'#555D50'}/></i>
					</div> 
				</div>		
			</div>
		</div>
	)
}

export default CartItem;


{/*	<span className = 'btn-decrement-increment-cart-item'onClick ={() => decrement(id)}> - </span> 
						<span className = 'btn-decrement-increment-cart-item'onClick ={() => increment(id)}> + </span> */}
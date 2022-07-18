import React, {useState,useEffect} from 'react';
import {storeProducts} from './data.js';
import {detailProduct} from './data.js'



const StoreProductsContext = React.createContext()

function StoreProductsContextProvider(props) {

	const [storeProduct,setStoreProduct] = useState([]);
	const [detailsProduct, setDetailProduct] = useState(detailProduct);
	const [cart, setCart] = useState([]);
	const [modalOpen,setModalOpen] = useState(false);
	const [modalProduct,setModalProduct] = useState(detailProduct);
	const [cartSubTotal,setCartSubTotal] = useState(0);
	const [cartTax, setCartTax] = useState(0);
	const [cartTotal,setCarTotal] = useState(0);
	const [hello, setHello] = useState(0);


	
{/*	const addToCart = (id) => {
		console.log(`hello from add to cart. id is ${id}`)
	}

*/}
	{console.log(cartTax)}


	function copyProducts () {
		let tempProducts = [];
		
		storeProducts.forEach(item => { 
			const singleItem = {...item};
			 tempProducts = [...tempProducts,singleItem];
		})
		
		setStoreProduct(tempProducts)
	
	};

		useEffect(() => {
		
		copyProducts();
		return () => {copyProducts()}
	
		},[],[storeProduct]
	
	); 


	{/* utiliy function gets the item object inside of array StoreProduct according to the current id */}

	const getItem = (id) => {
		
		const product = storeProduct.find(item => item.id  === id);
		return product;
	}


	{/* function making use of getItem that once pressing an img container modifiy detailsProduct according to the item */}


	const handleDetail = (id) => {
		const product = getItem(id);
		setDetailProduct(product);

	};

	const addToCart = (id) => {
		let tempProducts = [...storeProduct];  {/* copy array storeProduct in a variable to not mutate it */}
		const index = tempProducts.indexOf(getItem(id));{/* getItem gets you the object and indexOf tells you were that object is located in the array */}
		const product =tempProducts[index]; {/* gets you the object of array according to its index */} 
		
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;

		setStoreProduct(tempProducts);
		setCart(prevCart =>[...prevCart,product]); {/*  after each click on addToc Art copy state and add a new object to the array cart */}
		{console.log(cart)}
	};

	const openModal = (id) => {
		const product = getItem(id);
		setModalProduct(product);
		setModalOpen(true);

	}

	const closeModal = () => {
		setModalOpen(false);
	}

	const increment = (id) => {
		console.log('this is the increment method')
	}

	const decrement = (id) => {
		console.log('this is the decreement method')
	}

	const removeItem = (id) => {
		console.log('item remove')
	}


	const clearCart = () => {
		console.log('cart was cleared')
	}



	return(
		<StoreProductsContext.Provider value = {{
			storeProduct:storeProduct,
			detailsProduct:detailsProduct,
			copyProducts:copyProducts,
			addToCart:addToCart,
			handleDetail: handleDetail,
			addToCart:addToCart,
			modalOpen:modalOpen,
			modalProduct:modalProduct,
			cart:cart,
			openModal: openModal, 
			closeModal,closeModal,
			increment: increment, 
			decrement: decrement,
			removeItem: removeItem,
			clearCart: clearCart,

		
		}} >
			{props.children}
		</StoreProductsContext.Provider>
	)
}

export {StoreProductsContextProvider, StoreProductsContext}
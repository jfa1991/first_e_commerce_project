import React, {useState,useEffect} from 'react';
import {storeProducts} from '../data.js';
import {detailProduct} from '../data.js'



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


	
{/*	const addToCart = (id) => {
		console.log(`hello from add to cart. id is ${id}`)
	}

*/}
	{console.log(cart)}






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
		let tempProducts = [...storeProduct];  {/*copy array storeProduct in a variable to not mutate it  */}
		const index = tempProducts.indexOf(getItem(id)); {/*getItem gets you the object and indexOf tells you were that object is located in the array */}
		const product =tempProducts[index]; {/* gets you the object of array according to its index */}
		
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;

		setStoreProduct(tempProducts);
		setCart(prevCart =>[...prevCart,product]);  {/* after each click on addToc Art copy state and add a new object to the array cart */}
			
	}

	useEffect(() => {
			addTotals();
			},[cart]
	);


	const openModal = (id) => {
		const product = getItem(id);
		setModalProduct(product);
		setModalOpen(true);

	}

	const closeModal = () => {
		setModalOpen(false);
	}

	const increment = (id) => {
		let tempCartIncrement = [...cart];
		const selectedProductIncrement = tempCartIncrement.find(item => item.id === id);
		const indexIncrement = tempCartIncrement.indexOf(selectedProductIncrement);
		const productIncrement = tempCartIncrement[indexIncrement];

		productIncrement.count = productIncrement.count + 1;
		productIncrement.total = productIncrement.count * productIncrement.price;
		setCart(tempCartIncrement)

	}

	const decrement = (id) => {
		let tempCartDecrement = [...cart];
		const selectedProductDecrement = tempCartDecrement.find(item => item.id === id);
		const indexDecrement= tempCartDecrement.indexOf(selectedProductDecrement);
		const productDecrement = tempCartDecrement[indexDecrement];

		productDecrement.count = productDecrement.count - 1;

		if (productDecrement.count === 0)  
			return RemoveItem(id)
		
		
		else {
			productDecrement.total = productDecrement.count * productDecrement.price
		}

		setCart(tempCartDecrement)

	}

	function RemoveItem(id) {
		
		let tempProducts = [...storeProduct]; {/* copying the entire array of objecs */}
		let tempCart = [...cart]; {/* copying the array of item that were put in the cart*/}

		tempCart = tempCart.filter(item => item.id !== id); {/* removing from tempCart the item whose id is equal to the id of the item being removed */}
		const index = tempProducts.indexOf(getItem(id));  {/*getItem gets you the object and indexOf tells you were that object is located in the array */}
		let removedProduct = tempProducts[index];
		
		{/* When adding item to cart 3 properties of the items where changed 
			inCart, coun and total 

		Those ones need to be rechanged as they originally were */}

		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;

		setCart(tempCart)
		setStoreProduct(tempProducts);
		{console.log(tempCart)}


	}





	const clearCart = () => {
		setCart([]);
		copyProducts(); {/* allows to click again on cart icon to add item into cart */}
	
	}



const addTotals = () => {
		let subTotal = 0;
		cart.map(item => (subTotal +=item.total));  
		const tempTax = subTotal * 0.077; 
		const tax = parseFloat(tempTax.toFixed(2));   
		const total = subTotal + tax;
		setCartSubTotal(subTotal);
		setCartTax(tax);
		setCarTotal(total)
	}




	return(
		<StoreProductsContext.Provider value = {{
			storeProduct:storeProduct,
			detailsProduct:detailsProduct,
			cart:cart,
			copyProducts:copyProducts,
			addToCart:addToCart,
			handleDetail: handleDetail,
			modalOpen:modalOpen,
			modalProduct:modalProduct,
			openModal: openModal, 
			closeModal,closeModal,
			increment: increment, 
			decrement: decrement,
			RemoveItem: RemoveItem,
			clearCart: clearCart,
			cartSubTotal:cartSubTotal,
			cartTax: cartTax,
			cartTotal:cartTotal

		
		}} >
			{props.children}
		</StoreProductsContext.Provider>
	)
}

export {StoreProductsContextProvider, StoreProductsContext}


	{/*		storeProducts:storeProducts,
			detailProduct:detailProduct */}
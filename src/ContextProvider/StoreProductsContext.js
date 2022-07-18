import React, {useState,useEffect, useRef} from 'react';
import {storeProducts} from '../data.js';
import {detailProduct} from '../data.js';

import {inputsBilling} from '../dataBillingForms.js' 

import {inputsShipping} from '../dataBillingForms.js' 





const StoreProductsContext = React.createContext()

function StoreProductsContextProvider(props) {



	const [storeProduct,setStoreProduct] = useState([]);
	const [detailsProduct, setDetailProduct] = useState(detailProduct);
	const [cart, setCart] = useState([]);
	const [modalOpen,setModalOpen] = useState(false);
	const [modalOpenForm, setModalOpenForm] = useState(false);
	const [modalProduct,setModalProduct] = useState(detailProduct);
	const [cartSubTotal,setCartSubTotal] = useState(0);
	const [cartTax, setCartTax] = useState(0);
	const [cartTotal,setCarTotal] = useState(0);
	
	const [proceedCheckout, setProceedCheckout] = useState(false);
	
	const [numberItemsInCart,setNumberItemsCart] = useState(0);
	const [checked,setChecked] = useState(false); 
	
{/* initial object containing value associated to input field of checkoutForm */}

	const initialValues = {
		firstName:'',
		lastName:'',
		country:'',
		email:'',
		cityBilling:'',
		cityNumberBilling:'',
		addressBilling:'',
		zipBilling:'',
		cityShipping:'',
		cityNumberShipping:'',
		addressShipping:'',
		zipShipping:'', 
	
	}


const [arrayCount, setArrayCount] = useState([])


{/* State containing object with values associated to input fields of checkoutForm  */}


const [checkoutFormValues, setCheckoutFormValue] = useState(initialValues); 

const [formErrors, setFormErrors] = useState({})
const [isSubmit, setIsSubmit] = useState(false)
	


/* const [formValues, setFormValues] = useState(initialValues)} */
/* const [formErrors, setFormErrors] = useState({})} */
/* const [isSubmit, setIsSubmit] = useState(false) */
/* const handleChange = (e) => {
	const {name, value} = e.target;
		setFormValues({...formValues, [name]:value});
};

/* const handleSubmit = (e) => {
	e.preventDefault();
	setFormErrors(validate(formValues));
	setIsSubmit(true);
}; */


/* useEffect (() => {
			console.log(formErrors);
			if (Object.keys(formErrors).length === 0 && isSubmit) {
				console.log(formValues);
			}
		}, [formErrors]);




/*const validate = (values) => {
		const errors = {};
		const regex = ^[A-Za-zâàäèéiîôöòüû]+[A-Za-z ]*$';
			if(!values.username) {
				errors.username = 'blabla'
			}

			if(!values.email) {
				errors.email = 'blabla'
			} else if(!regex.test(values.email)) {
				errors.email = 'not valid email.'
			}

			if(!values.password) {
				errors.password = 'blabla'
			} else if (values.password.length < 4) {
				errors.password = 'more than 4 characters';
			}

			return errors

}; */
	
	
{/*	const addToCart = (id) => {
		console.log(`hello from add to cart. id is ${id}`)
	}

*/}



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
			addNumberOfItems();
			},[cart]
	);




{/* for (let element of cart) .... is the first layer of loop  
	allowing you to iterate through array cart. Element represent each indexed object of array

for (const key in element ) .... is the second layer of loop  
	allowing you to iterate through each element of indexed object */}

 const addNumberOfItems = () => {

 	let tempCart = [...cart];
 	let arrayCountObject = []
 	let sumNumberItems = 0


	for (let element of tempCart) { 

 		for (const key in element) {
 		   																												/* console.log(`${key}: ${element[key]}`); */		
   			if (key === 'count') {
   				arrayCountObject.push({'count':element[key]})
   				console.log(arrayCountObject)
 				} 			
		}

	}
  

  let arrayCount = arrayCountObject.map(a => a.count);
   console.log(arrayCount)
   

  arrayCount.forEach(item => {
    sumNumberItems += item;
    console.log(sumNumberItems);
    return sumNumberItems
  
  });

  setNumberItemsCart(sumNumberItems)

};




{console.log(cart)}



/*	const addNumberItems = () => {
			let totalItems = [...numberItemsInCart]
			storeProducts.map(item => (totalItems+= item.count))
			setNumberItemsCart(totalItems)

			setNumberItemsCart((numberItemsInCart) => [
        ...numberItemsInCart,
        1,
      ])

	}  */

	const numberTotalsItems = () => {
		let cartProducts = [...cart]
		let values = Object.values(cartProducts);
		console.log(values)


	}

			

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


		let arrayCountObject = []
 		let sumNumberItems = 0

 		for (let element of tempCartIncrement) { 

 		for (const key in element) {
 		   																												/* console.log(`${key}: ${element[key]}`); */		
   			if (key === 'count') {
   				arrayCountObject.push({'count':element[key]})
   				console.log(arrayCountObject)
 					} 			
			}
		}

		let arrayCount = arrayCountObject.map(a => a.count);
   	console.log(arrayCount)
   

  	arrayCount.forEach(item => {
    sumNumberItems += item;
    console.log(sumNumberItems);
    return sumNumberItems
  
  });

  setNumberItemsCart(sumNumberItems)





	
	/*	setNumberItemsCart(productIncrement.count) */

	}

	const decrement = (id) => {
		let tempCartDecrement = [...cart];
		const selectedProductDecrement = tempCartDecrement.find(item => item.id === id);
		const indexDecrement= tempCartDecrement.indexOf(selectedProductDecrement);
		const productDecrement = tempCartDecrement[indexDecrement]; 

		productDecrement.count = productDecrement.count - 1;
		setNumberItemsCart(productDecrement.count) 


		if (productDecrement.count === 0)  
			return RemoveItem(id)
		
		
		else {
			productDecrement.total = productDecrement.count * productDecrement.price
		}


		let arrayCountObject = []
 		let sumNumberItems = 0

 		for (let element of tempCartDecrement) { 

 		for (const key in element) {
 		   																												/* console.log(`${key}: ${element[key]}`); */		
   			if (key === 'count') {
   				arrayCountObject.push({'count':element[key]})
   				console.log(arrayCountObject)
 					} 			
			}
		}

		let arrayCount = arrayCountObject.map(a => a.count);
   	console.log(arrayCount)
   

  	arrayCount.forEach(item => {
    sumNumberItems += item;
    console.log(sumNumberItems);
    return sumNumberItems
  
  });

  setNumberItemsCart(sumNumberItems)


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
		setNumberItemsCart(removedProduct.count)



	}


	const clearCart = () => {
		setCart([]);
		copyProducts(); {/* allows to click again on cart icon to add item into cart */}
		setNumberItemsCart(0)

	
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
	};





{/* Function handling checkbox shipping address in CheckoutForm */}

	const handleClickCheckBox = () => {
		setChecked(!checked); 
    
  	};


 const addShippingFee = () => {
 		setProceedCheckout(true);
 }

/* const removeShippingFee = () => {
		setProceedCheckout(false); 
} */

function removeShippingFee () {
	setProceedCheckout(false); 

}



 /* Function handling input field form in checkout form  */

		const handleInputChange = (e) => {
    	const { name, value } = e.target;
    	e.persist();
    	setCheckoutFormValue({
      		...checkoutFormValues,
      		[name]: value,

    	});
  	}; 


   const handleSubmit = (e) => {
			e.preventDefault();
			setFormErrors(validate(checkoutFormValues));
			setIsSubmit(true);
		
}; 



 const validate = (values) => {
		const errors = {};
		const regexAlpha = /^[a-z ,âàäèéiîôöòüû.'-]+$/i;
		const regexNumber = /^[0-9]+$/
		const regexEmail = /^[^ \s@]+@[^\s@]+\.[^\s@]{2,}$/i;
	
			if(!values.firstName) {
				errors.firstName = 'First Name is required!'
			} else if (!regexAlpha.test(values.firstName))  {
				errors.firstName = 'Please do not include numbers or special characters';
			}

			if(!values.lastName) {
				errors.lastName = 'Last Name is required!'
			} else if (!regexAlpha.test(values.lastName))  {
				errors.lastName = 'Please do not include numbers or special characters';
			}


			if(!values.country) {
				errors.country = 'Country is required!'
			}



			if(!values.cityBilling) {
				errors.cityBilling = 'City name is required!'
			} else if (!regexAlpha.test(values.cityBilling))  {
				errors.cityBilling = 'Please do not include numbers or special characters';
			}

			if(!values.addressBilling) {
				errors.addressBilling = 'Address is required!'
			} else if (!regexAlpha.test(values.addressBilling))  {
				errors.addressBilling = 'Please do not include numbers or special characters';
			}

			if(!values.cityNumberBilling) {
				errors.cityNumberBilling = 'Street N° is required!'
			} else if (!regexNumber.test(values.cityNumberBilling))  {
				errors.cityNumberBilling = 'Please do not include letters or special characters';
			}

			if(!values.zipBilling) {
				errors.zipBilling = 'Zip / Postcode is required!'
			} else if (!regexNumber.test(values.zipBilling))  {
				errors.zipBilling = 'Please do not include letters or special characters';
			}

			if(!values.email) {
				errors.email = 'Email is required!'
			} else if (!regexEmail.test(values.email))  {
				errors.email = 'Please enter a valid email';
			}

	/*		if(!values.cityShipping) {
				errors.cityShipping = 'City name is required!'
			} else if (!regexAlpha.test(values.cityShipping))  {
				errors.cityShipping = 'Please do not include numbers or special characters';
			}

			if(!values.addressShipping) {
				errors.addressShipping = 'Address is required!'
			} else if (!regexAlpha.test(values.addressShipping))  {
				errors.addressShipping = 'Please do not include numbers or special characters';
			}

			if(!values.cityNumberShipping) {
				errors.cityNumberShipping = 'Street N° is required!'
			} else if (!regexNumber.test(values.cityNumberShipping))  {
				errors.cityNumberShipping = 'Please do not include letters or special characters';
			}

			if(!values.zipShipping) {
				errors.zipShipping = 'Zip / Postcode is required!'
			} else if (!regexNumber.test(values.zipShipping))  {
				errors.zipShipping = 'Please do not include letters or special characters';
			} */
	
			return errors

};  

	const openModalFormButton = () => {
		setModalOpenForm(true);

	};

	const closeModalFormButton = () => {
		setModalOpenForm(false);
	};

	const clearInputsForm  = () => {
		setCheckoutFormValue(initialValues);

	};



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
			cartTotal:cartTotal,

			numberItemsInCart: numberItemsInCart,

			proceedCheckout:proceedCheckout,
			addShippingFee:addShippingFee,
			removeShippingFee:removeShippingFee,
			
			checked:checked,
			initialValues:initialValues,
			checkoutFormValues:checkoutFormValues,
			handleInputChange:handleInputChange,
			handleClickCheckBox:handleClickCheckBox,
			
			isSubmit:isSubmit,
			formErrors:formErrors,
			handleSubmit:handleSubmit,
			validate:validate,

			modalOpenForm:modalOpenForm,
			openModalFormButton:openModalFormButton,
			closeModalFormButton:closeModalFormButton,
			clearInputsForm:clearInputsForm
			


		}} >
			{props.children}
		</StoreProductsContext.Provider>
	)
}

export {StoreProductsContextProvider, StoreProductsContext}


	{/*		storeProducts:storeProducts,
			detailProduct:detailProduct */}
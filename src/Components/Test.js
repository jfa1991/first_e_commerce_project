
	{/* Detestructing of detailsProducts} 


	
	const {storeProducts,detailsProduct} = ProductsStore

	const [obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8] = storeProducts;

	let {id,title,img,price} = obj1

	{console.log(img)} */}





	{/*const [{id,title,img,price,inCart}] = ProductsStore.storeProducts 
	const {ids} = {ids: ProductsStore.storeProduct.map(a=> a.id)}
	{console.log(ids)} */}

{/*	HELLO Example

const products = ProductsStore.storeProducts.map(index=> 
			<img className = 'img-card'src ={index.img} />

		)

*/}


	{/*	 HEllo Example


		<div className = 'img-container' onClick={()=> console.log('You clicked me on the image container')}>
			<Link to ='/details'>
				{products}
			</Link>

			<button className = 'card-btn' disabled={inCart ? true : false}>
					{inCart ? (<p disabled>)
					{''}
					in inCart
					</p>
					):( 
					<i className ='fas fa-cart-plus'/>
				)} 
			</button>
			

			</div> */}



			{/*Product.propTypes = {
	storeProducts:PropTypes.shape({
		id:PropTypes.number,
		img:PropTypes.string,
		title:PropTypes.string,
		price:PropTypes.number,
		inCart:PropTypes.bool
	}).isRequired
}; */}


{/*Product.propTypes = {
	storeProduct: PropTypes.shape({
		id:PropTypes.number,
		title:PropTypes.string,
		img:PropTypes.string,
		price:PropTypes.number,
		inCart:PropTypes.bool
	}).isRequired

}; */}



{/*	const product = ProductStore.storeProduct.map(i=>
		
		<div className = 'img-container' onClick={()=> console.log('You clicked me on the image container')}>
			<Link to ='/details'>
				<img className = 'img-card'src ={i.img} />
			</Link>
			<button 
				className = 'card-btn' 
				disabled={i.inCart ? true : false}
				onClick={() => {
					console.log('added to the cart')
				}}>
				
				{i.inCart ? (
					<p disabled>
						{''}
						in Cart
					</p>
				):( 
					<i className ='fas fa-cart-plus'/>
				)} 
			</button>
			
			<div className = 'card-footer'>
			 	<p>{i.title}</p>
			 	<span>$</span>
			 	<h5>{i.price}</h5>
			</div>
		</div>
	)


const addTotals = () => {
		let subTotal = 0;
		cart.map(item => (subTotal +=item.total));  To get subtotal we loop through array cart where we sum value of each object 
		const tempTax = subTotal * 0.077; 
		const tax = parseFloat(tempTax.toFixed(2));  number was rounded to 2 decimals 
		const total = subTotal + tax;
		setCartSubTotal(subTotal);
		setCartTax(tax);
		setCarTotal(total)

	const addToCart = (id) => {
		let tempProducts = [...storeProduct];  copy array storeProduct in a variable to not mutate it 
		const index = tempProducts.indexOf(getItem(id)); getItem gets you the object and indexOf tells you were that object is located in the array
		const product =tempProducts[index]; gets you the object of array according to its index 
		
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;

		setStoreProduct(tempProducts);
		setCart(prevCart =>[...prevCart,product]);  after each click on addToc Art copy state and add a new object to the array cart 
		addTotals()

	
	};

		async function AddToCart (id) {
		let tempProducts = [...storeProduct];   copy array storeProduct in a variable to not mutate it 
		const index = tempProducts.indexOf(getItem(id)); getItem gets you the object and indexOf tells you were that object is located in the array 
		const product =tempProducts[index]; gets you the object of array according to its index 
		
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		await setStoreProduct(tempProducts);
		await setCart(prevCart =>[...prevCart,product]);  after each click on addToc Art copy state and add a new object to the array cart 
		await addTotals()
	}


		const removeItem = (id) => {
		let tempProducts = [...storeProduct]; {/* copying the entire array of objecs 
		let tempCart = [...cart]; copying the array of item that were put in the cart

		tempCart = tempCart.filter(item => item.id !== id); removing from tempCart the item whose id is equal to the id of the item being removed 
		
		const index = tempProducts.indexOf(getItem(id));  getItem gets you the object and indexOf tells you were that object is located in the array 
		let removedProduct = tempProducts[index];
		
		 When adding item to cart 3 properties of the items where changed 
			inCart, coun and total 

		Those ones need to be rechanged as they originally were 

		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0

		setCart(...tempCart)

	}








*/}


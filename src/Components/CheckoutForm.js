import React,{useContext} from 'react';


import {Link, useNavigate} from 'react-router-dom';

import {ModalContainer} from './ModalContainer.js';


import {StoreProductsContext} from '../ContextProvider/StoreProductsContext.js';




function CheckoutForm (props) {


	



	const ProductStore = useContext(StoreProductsContext);


	


	const {	checkoutFormValues,
			handleClickCheckBox, 
			checked,
			handleInputChange,


			
			isSubmit,
			formErrors,
			handleSubmit, 
			validate,

			modalOpenForm,
			openModalFormButton,
			closeModalFormButton,

 
			 } = ProductStore;


	const {firstName,lastName,country,email,cityBilling,cityNumberBilling,zipBilling,addressBilling,cityShipping,cityNumberShipping, addressShipping,zipShipping} = checkoutFormValues;

	

/*	const inputsField = inputsBilling.map(indexObject=>
		<div key = {indexObject.id}>
			<label>{indexObject.label}</label>
			<input className = 'input-checkbox-checkout-page-e-commerce'
				text = {indexObject.text}
				name = {indexObject.name}
				onChange = {handleInputChange}
			 />	
		</div>
	
	)*/


	const styleErrorMessage = {
		color:'#B22222', 
		fontSize: '.85rem', 
		letterSpacing: '1.6'
	}

	return(
		<div className = 'div-general-checkout-page-e-commerce'>

		<div className ='div-background-next-to-form-checkout-page-e-commerce'></div>

			<form className = 'grid-form-checkout-page-e-commerce' onSubmit={handleSubmit} autoComplete = 'off' id = 'form1' >
						<h3 className = 'billing-details-checkout-page-e-commerce'>Billing details </h3>
					
						<label className ='label-first-name-checkout-page-e-commerce' >First Name
			        		<input className = 'input-checkout-page-e-commerce' style = {{ border : formErrors.firstName ? '2px solid #B22222' : '1px solid #9DA6B6'}} 
			        			type = 'text'
			        			name = 'firstName'
			        			onChange = {handleInputChange}
			        			value = {firstName}
			        		/>

			        		<span style = {styleErrorMessage}>{formErrors.firstName}</span>

			        	</label>



			        <label className ='label-last-name-checkout-page-e-commerce'>Last Name
			        		<input className = 'input-checkout-page-e-commerce' style = {{ border : formErrors.lastName ? '2px solid #B22222' : '1px solid #9DA6B6'}}
			        			type = 'text'
			        			name='lastName'
			        			onChange={handleInputChange}
								value={lastName}			
			        		/>

			        		<span style = {styleErrorMessage}>{formErrors.lastName}</span>

			       </label>

			      	<label className ='label-drop-down-menu-checkout-page-e-commerce'>Country
			        		<select className = 'select-country-checkout-page-e-commerce'
			        			onChange={handleInputChange}
								value={country}
			        			name = 'country'
			        			style = {{ border : formErrors.country ? '2px solid #B22222' : '1px solid #9DA6B6'}}
							>


            					<option value="Hippie Land">Hippie Land</option>
            					<option value="Austria">Austria</option>
            					<option value="France">France</option>
            					<option value="Germany">Germany</option>
            					<option value="Italy">Italy</option>
            					<option value="Portugal">Portugal</option>
            					<option value="Spain">Spain</option>
            					<option value="Switzerland">Switzerland</option>
          					</select>

          			<span style = {styleErrorMessage}>{formErrors.country}</span>

			       	</label> 
			        

			       	<label className ='label-city-checkout-page-e-commerce'>Town / City
			        		<input className = 'input-checkout-page-e-commerce' 
			        			style = {{ border : formErrors.cityBilling ? '2px solid #B22222' : '1px solid #9DA6B6'}}
			        			type = 'text'
			        			name='cityBilling' 
			        			onChange={handleInputChange}
								value={cityBilling}
			        		/>

			        		<span style = {styleErrorMessage}>{formErrors.cityBilling}</span>
			        </label>


			        
			        				<label className ='label-street-address-checkout-page-e-commerce'> Billing Address
			        					<input className = 'input-checkout-page-e-commerce' 
			        						style = {{ border : formErrors.addressBilling ? '2px solid #B22222' : '1px solid #9DA6B6'}}
			        						type = 'text'
			        						onChange={handleInputChange}
											value={addressBilling}
			        						name='addressBilling'
			        					/>

			        					<span style = {styleErrorMessage}>{formErrors.addressBilling}</span>
			        				</label>
			        				
			        				<label className ='label-city-number-checkout-page-e-commerce'> Street N°
			        					<input className = 'input-checkout-page-e-commerce' 
			        						style = {{ border : formErrors.cityNumberBilling ? '2px solid #B22222' : '1px solid #9DA6B6'}}
			        						type = 'text'
			        						name='cityNumberBilling'  
			        						onChange={handleInputChange}
											value={cityNumberBilling}
			        					/>

			        					<span style = {styleErrorMessage}>{formErrors.cityNumberBilling}</span>

			        				</label>
			        			

			        			{/* <div className = 'div-billing-street-address-number-checkout-page-e-commerce'>
			        					<label className ='label-street-address-checkout-page-e-commerce'> Address
			        						<input className = 'input-checkout-page-e-commerce' 
			        							style = {{ border : formErrors.addressBilling ? '2px solid #B22222' : '1px solid #9DA6B6'}}
			        							type = 'text'
			        							name='addressBilling'
			        							onChange={handleInputChange}
												value={addressBilling}
			        						/>

			        						<span style = {styleErrorMessage}>{formErrors.addressBilling}</span>
			        					
			        					</label>

			        					<label className ='label-city-number-checkout-page-e-commerce'> Street N°
			        						<input className = 'input-checkout-page-e-commerce' 
			        							style = {{ border : formErrors.cityNumberBilling ? '2px solid #B22222' : '1px solid #9DA6B6'}}
			        							type = 'text'
			        							name='cityNumberBilling'  
			        							onChange={handleInputChange}
												value={cityNumberBilling}	
			        						/>

			        						<span style = {styleErrorMessage}>{formErrors.cityNumberBilling}</span>

			        					</label>
			        				</div>  */}

			        		<label className ='label-zip-checkout-page-e-commerce'>Postcode / Zip
			        			<input className = 'input-checkout-page-e-commerce' 
			        				style = {{ border : formErrors.zipBilling ? '2px solid #B22222' : '1px solid #9DA6B6'}}
			        				type = 'text' 
			        				name='zipBilling'
			        				onChange={handleInputChange}
									value={zipBilling}
			        	 		/>

			        	 		<span style = {styleErrorMessage}>{formErrors.zipBilling}</span>

			        		</label>

			        		<label className ='label-email-chekcout-page-e-commerce'>Email Address
			        			<input className = 'input-checkout-page-e-commerce'
			        				style = {{ border : formErrors.email ? '2px solid #B22222' : '1px solid #9DA6B6'}}
			        				type = 'text'
			        				name='email'
			        				onChange = {handleInputChange}
			        				value = {email}
			        			/>
			        			<span style = {styleErrorMessage}>{formErrors.email}</span>

			        		</label>

			      {/*  	<div className = 'div-checkbox-label-checkout-page-e-commerce'>
							<input className = 'input-checkbox-ship-address-checkout-page-e-commerce' type="checkbox" onClick= {handleClickCheckBox} />
							<label className = 'label-checkbox-ship-address-checkout-page-e-commerce'>Shipping to a different address ?</label>
						</div>

						{checked ?  <label className ='label-city-shipping-checkout-page-e-commerce'>Town / City
			        					<input className = 'input-checkout-page-e-commerce' 
			        						type = 'text'
			        						name='cityShipping'
			        						onChange={handleInputChange}
											value={cityShipping}
			        						/>

			        					<span style = {styleErrorMessage}>{formErrors.cityShipping}</span>

			        				</label>

			        			: null }

			        	{checked ? <div className = 'div-shipping-street-address-number-checkout-page-e-commerce'>
			        					<label className ='label-address-shipping-checkout-page-e-commerce'> Shipping Address
			        						<input className = 'input-checkout-page-e-commerce' 
			        							type = 'text'
			        							onChange={handleInputChange}
												value={addressShipping}
			        							name='addressShipping'
			        						/>

			        						<span style = {styleErrorMessage}>{formErrors.addressShipping}</span>

			        					</label> 

			        			<label className ='label-address-shipping-city-number-checkout-page-e-commerce'> Street N°
			        						<input className = 'input-checkout-page-e-commerce' 
			        							type = 'text'
			        							name='cityNumberShipping'
			        							onChange={handleInputChange}
												value={cityNumberShipping}
			        						/>

			        						<span style = {styleErrorMessage}>{formErrors.cityNumberShipping}</span>
			        					
			        					</label>
			        			</div>

			        			: null }

			        		{checked ? <label className ='label-zip-shipping-checkout-page-e-commerce'>Postcode / Zip
			        						<input className = 'input-checkout-page-e-commerce' 
			        							type = 'text'
			        							name='zipShipping'
			        							onChange={handleInputChange}
												value={zipShipping}
			        						/>

			        						<span style = {styleErrorMessage}>{formErrors.zipShipping}</span>

			       						</label> 

			       			: null }  */}


			    
			      

			     <button className = 'submit-info-checkout-page-e-commerce'type = 'submit' onClick = {openModalFormButton}>Submit Infos </button>
			      


			</form>

		


			{(Object.keys(formErrors).length === 0 && isSubmit && modalOpenForm) ? <ModalContainer onClick ={closeModalFormButton}>	
					<Link to = '/verify' className = 'link-continue-to-verify-order-checkout-page-e-commerce'>
			  			<p className = 'continue-to-veryfy-order-checkout-page-e-commerce' onClick={openModalFormButton}>
			  				Infos Submitted! <br/>Click Here to Complete Checkout
			  			</p>
					</Link></ModalContainer> : null }
		
		</div>
	)
}


export default CheckoutForm; 
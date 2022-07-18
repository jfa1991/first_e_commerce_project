import React,{useContext} from 'react';




function ModalCheckoutForm () {

	
	return(
		<div className = 'div-general-checkout-page-e-commerce'>

			<h3 className = 'billing-details-checkout-page-e-commerce'>Billing details </h3>
			<form className = 'grid-form-checkout-page-e-commerce '>
					<div className = 'div-label-first-last-names-checkout-page-e-commerce'>
						<label className ='label-first-name-checkout-page-e-commerce' for = 'first_name'>First Name
			        		<input className = 'input-checkout-page-e-commerce' type = 'text'  id ='first_name' required/>
			        	</label>
			        	
			       		<label className ='label-last-name-checkout-page-e-commerce' for = 'last_name'>Last Name
			        		<input className = 'input-checkout-page-e-commerce' type = 'text'  id ='last_name' required/>
			        	</label>
			        </div>
			        	
			        <label className ='label-drop-down-menu-checkout-page-e-commerce' for = 'country'>Country
			        	<select className = 'select-country-checkout-page-e-commerce'>
            				<option value="Hippie Land">Hippie Land</option>
            				<option value="Austria">Austria</option>
            				<option value="France">France</option>
            				<option value="Germany">Germany</option>
            				<option value="Italy">Italy</option>
            				<option value="Portugal">Portugal</option>
            				<option value="Spain">Spain</option>
            				<option value="Switzerland">Switzerland</option>
          				</select>
			        </label>

			         <label className ='label-city-checkout-page-e-commerce'   for = 'city'>Town / City
			        	<input className = 'input-checkout-page-e-commerce' type = 'text'  id ='city' required/>
			        </label>

			        <label className ='label-street-address-checkout-page-e-commerce'   for = 'address'>Street Adress
			        	<input className = 'input-checkout-page-e-commerce' type = 'text'  id ='address' required/>
			        </label>

			         <label className ='label-zip-checkout-page-e-commerce' for = 'zip'>Postcode / Zip
			        	<input className = 'input-checkout-page-e-commerce' type = 'text'  id ='zip' required/>
			        </label>

			         <label className ='label-email-chekcout-page-e-commerce' for = 'e-mail'>Email address
			        	<input className = 'input-checkout-page-e-commerce' type = 'email'  id ='e-mail' required/>
			        </label>
			</form>
		</div>
	)
}

export default ModalCheckoutForm;



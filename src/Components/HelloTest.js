{/*}			 		<label className ='label-last-name-checkout-page-e-commerce'>Last Name
			        		<input className = 'input-checkout-page-e-commerce' 
			        			type = 'text'
			        			name='lastName'
			        			onChange={handleInputChange}
								value={lastName}
			        			
			        		/>
			        	</label>
			        </div>
			        	
			     <label className ='label-drop-down-menu-checkout-page-e-commerce'>Country
			        	<select className = 'select-country-checkout-page-e-commerce'
			        		onChange={handleInputChange}
							value={country}
			        		name = 'country'
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
			        </label>  


			        <label className ='label-city-checkout-page-e-commerce'>Town / City
			        	<input className = 'input-checkout-page-e-commerce' 
			        		type = 'text'
			        		name='cityBilling' 
			        		onChange={handleInputChange}
							value={cityBilling}
			        	/>
			        
			        </label>




			        {checked ? <div className = 'div-billing-street-address-number-checkout-page-e-commerce'>
			        				<label className ='label-street-address-checkout-page-e-commerce'> Billing Address
			        					<input className = 'input-checkout-page-e-commerce' 
			        						type = 'text'
			        						ref = {userNameRef}
			        						onChange={handleInputChange}
											value={addressBilling}
			        						name='addressBilling'
			        					/>
			        				</label>



			        				<label className ='label-city-number-checkout-page-e-commerce'> Street N°
			        					<input className = 'input-checkout-page-e-commerce' 
			        						type = 'number'
			        						name='cityNumberBilling'  
			        						onChange={handleInputChange}
											value={cityNumberBilling}
			        					/>
			        				</label>
			        			</div>

			        			: <div className = 'div-billing-street-address-number-checkout-page-e-commerce'>
			        					<label className ='label-street-address-checkout-page-e-commerce'> Address
			        						<input className = 'input-checkout-page-e-commerce' 
			        							type = 'text'
			        							name='addressBilling'
			        							onChange={handleInputChange}
												value={addressBilling}
			        						/>
			        					</label>

			        					<label className ='label-city-number-checkout-page-e-commerce'> Street N°
			        						<input className = 'input-checkout-page-e-commerce' 
			        							type = 'number'
			        							name='cityNumberBilling'  
			        							onChange={handleInputChange}
												value={cityNumberBilling}
			        							
			        						/>
			        					</label>
			        				</div> }

			       	
			         <label className ='label-zip-checkout-page-e-commerce'>Postcode / Zip
			        	<input className = 'input-checkout-page-e-commerce' 
			        		type = 'number' 
			        		name='zipBilling'
			        		onChange={handleInputChange}
							value={zipBilling}
			        	 />
			        </label>
			      

			         <label className ='label-email-chekcout-page-e-commerce'>Email Address
			        	<input className = 'input-checkout-page-e-commerce' 
			        		type = 'email'
			        		name='email'
			        		onChange = {handleInputChange}
			        		value = {email}
			        		/>
			        </label>


			        <div className = 'div-checkbox-label-checkout-page-e-commerce'>
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
			        			</label> 

			        			<label className ='label-address-shipping-city-number-checkout-page-e-commerce'> Street N°
			        						<input className = 'input-checkout-page-e-commerce' 
			        							type = 'number'
			        							name='cityNumberShipping'
			        							onChange={handleInputChange}
												value={cityNumberShipping}
			        						/>
			        					</label>
			        			</div>

			        			: null }

			        {checked ? <label className ='label-zip-shipping-checkout-page-e-commerce'>Postcode / Zip
			        				<input className = 'input-checkout-page-e-commerce' 
			        					type = 'number'
			        					name='zipShipping'
			        					onChange={handleInputChange}
										value={zipShipping}
			        				/>
			       				</label> 

			       			: null } 




=================== SHIPPPING PART =========================



<div className = 'div-checkbox-label-checkout-page-e-commerce'>
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

			       			: null }


=========================== verify order ==========================


 	/*	{!checked ? null : 

		   	        <div className = 'div-infos-names-shipping-address-verify-order-e-commerce'>
		   	            <h3 className = 'title-delivery-address-modal-verify-order-e-commerce'>Delivery Address</h3>
		                <p className ='shipping-address-verify-order-e-commerce'>{addressShipping}</p>
		                <p className = 'shipping-zip-city-verify-order-e-commerce'>{zipShipping} {cityShipping}</p>
		              </div>

		              {!checked ? <h3 className = 'title-delivery-address-verify-order-e-commerce'>Delivery Address</h3>

		                 : <h3 className = 'title-billing-address-verify-order-e-commerce'>Billing Address</h3> }

		    	} */




			       			 */}
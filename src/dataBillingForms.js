export const inputsBilling  = [


		{ 
			id:1,
			name:'firstName',
			type:'text',
			firstName:'',
			label:'First Name',
			errorMessage:'Should not include any special character or number',
			required:true,
			pattern:'^[A-Za-zâàäèéiîôöòüû]+[A-Za-z ]*$',
			hello:'a',

		},
	
		{ 
			id:2,
			name:'lastName',
			type:'text',
			lastName:'',
			label:'Last Name',
			errorMessage:'Should not include any special character or number',
			required:true,
			pattern:'^[A-Za-zâàäèéiîôöòüû]+[A-Za-z ]*$',
			hello:'b',

		},

		{ 
			id:3,
			name:'cityBilling',
			type:'text',
			cityBilling:'',
			label:'City / Town',
			errorMessage:'Should not include any special character or number',
			required:true,
			pattern:'^[A-Za-zâàäèéiîôöòüû]+[A-Za-z ]*$',
			hello:'c',
		},

		{ 
			id:4,
			name:'addressBilling',
			type:'text',
			addressBilling:'',
			label:'Address ',
			errorMessage:'Should not include any number or special character',
			required:true,
			pattern:'^[A-Za-zâàäèéiîôöòüû]+[A-Za-z ]*$',
			hello:'d',
		},

		{ 
			id:5,
			name:'cityNumberBilling',
			type:'number',
			cityNumberBilling:'',
			label:'Street N°',
			errorMessage:'Should only include numbers',
			required:true,
			pattern:'^[0-9]*$',
			hello:'e',

		},

		{ 
			id:6,
			name:'zipBilling',
			type:'number',
			zipBilling:'',
			label:'Postcode / Zip',
			errorMessage:'Should only include numbers',
			required:true,
			pattern:'^[0-9]*$',
			hello:'f',
		},

	];

export const inputsShipping = [
		
		{ id:1,
			name:'cityShipping',
			type:'text',
			errorMessage:'Should not include any number or special character',
			required: true,
		},

		{ id:2,
			name:'addressShipping',
			type:'text',
			errorMessage:'Should not include any number or special character',
			required: true,
		},

		{ id:3,
			name:'cityNumberShipping',
			type:'text',
			errorMessage:'Should include only numbers',
			required: true,
		},

			{ id:4,
			name:'zipShipping',
			type:'text',
			errorMessage:'Should include only numbers',
			required: true,
		},
	]
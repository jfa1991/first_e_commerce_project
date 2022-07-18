import styled from 'styled-components';


export const ButtonContainer = styled.button`
	font-size:1.25rem;
	font-weight:bolder;
	padding: 0.25em .75em;
	line-height: 1.6;
  	letter-spacing: 1px;

	background: transparent;
	border: 1px solid;
	border-color:${props => (props.cart ? '#9DA6B6' : '#E4DACD')};
	color:${props => (props.cart ? '#FFF' : '#FFF')};
	background:${props => (props.cart ? '#CD6547' : '#9DA6B6')};

	border-radius: 6px;
	cursor:pointer;
	transition: background 200ms ease-in;
	
	{/* before use of conditional rendering
	&:hover {
		background:blue;
		color:#FFF;
	} 

	&:hover {
		background:${props => (props.cart ? '#9DA6B6' : 'orange')};
		color:#E4DACD;

	&:hover {
		background:${props => (props.cart ? '#CD6547' : 'orange')};
		color:#555D50;, 

	*/}



	&:focus {
		outline:none
	}  
`
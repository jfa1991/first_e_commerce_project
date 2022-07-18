import React from 'react';

import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';



function Footer () {
	return(
		<div>
			
			<footer className= 'footer-e-commerce'>


		          	<div className = 'container-social-media-footer-e-commerce'>
		      			<i><FaFacebookSquare className = 'icon-social-media-footer-e-commerce facebook-footer-e-commerce' size = {24}/></i>
		      			<i><FaInstagramSquare  className = 'icon-social-media-footer-e-commerce instagram-footer-e-commerce' size = {24}/></i>
		      			<i><FaTwitterSquare className = 'icon-social-media-footer-e-commerce twitter-footer-e-commerce' size = {24} /></i>
		    		</div>

			      <div className ='div-copyright-green-lemon-footer-e-commerce'>
		    		<p className = 'copyright-footer-e-commerce'>© 2022 Biyou Inc. All rights reserved.</p>
		    		<p className = 'GreenLemon-footer-e-commerce' >Crafted by GreenLemon</p>
		          </div>
			
			</footer>
		
		</div>
	)	

}

export default Footer;




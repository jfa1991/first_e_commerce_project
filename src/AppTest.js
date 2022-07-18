
import React from 'react';
import styles from './css_style/style.css';


import {Routes,Route} from 'react-router-dom';

import Cart from './Components/Cart.js';
import CheckoutForm from './Components/CheckoutForm.js';


import Default from './Components/Default.js';
import Details from './Components/Details.js';

import Home from './Components/Home.js';

import Modal from './Components/Modal.js'
import Navbar from './Components/Navbar.js';
import Product from './Components/Product.js';
import ProductList from './Components/ProductList.js';

import VerifyOrder from './Components/VerifyOrder.js'; 



import Footer from './Components/Footer.js';





function AppTest() {
  return (
    <React.Fragment>
      <Navbar/>

      <Routes>
          <Route exact path = '/' element= {<Home/>}/>
          <Route exact path = '/products' element= {<ProductList/>}/>
          <Route path = '/details' element= {<Details/>}/>
          <Route path = '/cart' element= {<Cart/>}/>
          <Route path='/checkout' element = {<CheckoutForm/>}/>
          <Route path='/verify' element = {<VerifyOrder/>}/>  
         

          <Route path="*" element= {<Default/>}/> 
      </Routes>
      <Modal/>

      <Footer/>

    </React.Fragment>
    
  );
}

export default AppTest;

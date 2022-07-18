
import React from 'react';
import styles from './css_style/style.css';


import {Routes,Route} from 'react-router-dom';

import Cart from './Components/Cart.js';
import Default from './Components/Default.js';
import Details from './Components/Details.js';

import Modal from './Components/Modal.js'
import Navbar from './Components/Navbar.js';
import Product from './Components/Product.js';
import ProductList from './Components/ProductList.js';







function App() {
  return (
    <React.Fragment>
      <Navbar/>

      <Routes>
          <Route exact path = '/' element= {<ProductList/>}/>
          <Route path = '/details' element= {<Details/>}/>
          <Route path = '/cart' element= {<Cart/>}/>
          <Route path="*" element= {<Default/>}/> 
      </Routes>
      <Modal/>


    </React.Fragment>
    
  );
}

export default App;

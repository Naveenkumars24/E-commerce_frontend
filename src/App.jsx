import React from 'react'
import './App.css'
import { useState } from 'react';
import Header from './Components/Header';
import Products from './Components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [cart,setCart] = useState([]);
  return(
       <>
       <BrowserRouter>
        <ToastContainer/>
       <Header/>
       <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
       </Routes>
       </BrowserRouter>
       </>
  );
}

export default App;
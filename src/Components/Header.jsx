import React from 'react'
import './Header.css'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';
const Header = () => {
     const count = useSelector((state) => state.counter.count);
     const totalQuantity = useSelector((state) => state.cart.totalQuantity);
     const cartItems = useSelector((state) => state.cart.Addeditems);
     console.log("Cart items : ",cartItems);
  return (
    <>
    <div className='Header'>
        <h3>LOGO</h3>
        <div className='Header-links'>
        <Link to="/" >Products</Link>
        <a href=''>About</a>
        </div>
        <div className='Header-cart'>
            <Link to="/cart">CART : {totalQuantity} </Link>
            <p>COUNT : {count}</p>
        </div>
        
    </div>
    </>
  )
}

export default Header
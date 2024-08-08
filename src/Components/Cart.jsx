import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import counterSlice, { increment } from "../redux/counterSlice";
import { incrementItem ,decrementItem ,removeItem} from "../redux/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.Addeditems);
  console.log(cartItems);

  const cartStyle = {
    height : cartItems.length > 4 ? '100%' :'90vh',
  }
  
  const increamentitem = (item) =>{
        dispatch(incrementItem(item));
  };
  const decreamentitem = (item) =>{
        dispatch(decrementItem(item));
  };
  const removeitem = (item) =>{
    dispatch(removeItem(item));
  }
  const total = useMemo(() => {
       var sum = 0;
       cartItems.forEach((item) => {
        sum += item.price * item.quantity;
        });
        return sum;
  },[cartItems]);

  if (cartItems.length == 0) {
    return (
      <>
        <div className="cart" style={{height:"90vh",justifyContent:"center",alignItems:"center"}}>
          <h1>CART IS EMPTY😴</h1>
        </div>    
      </>
    );
  }
  return (
    <>
      <div className="cart" style={cartStyle}>
        <div className="cart-items">
          {cartItems.map((product) => (
            <div key={product.id} className="product-cart">
              <div className="product-cart-left">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-cart-right">
                <h3>{product.title}</h3>
                <button onClick={() => increamentitem(product)}>+</button>
                 <b>{product.quantity}</b>
                <button onClick={() => decreamentitem(product)}>-</button>
                <button onClick={() => removeitem(product)} style={{backgroundColor:"#d75252",marginLeft:"10px"}}>X</button>
                <b>Price: ${product.price}</b>
              </div>
            </div>
          ))}
        </div>
        {/* Right side */}
        <div className="summary">
            <div className="summary-details">
                <h1>Summary</h1>
                <br/>
                {cartItems.map((product) => (
                <div className="product-price-summary">
                <h3>{product.title}{product.price} {product.quantity} {(product.price * product.quantity).toFixed(2)}</h3>
                </div>
                ))}
                <br/>
                <h2>Total amount : $ {total.toFixed(2)} </h2>
            </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
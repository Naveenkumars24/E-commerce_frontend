import React, { useEffect, useState } from "react";
import './Product.css';
// import PRODUCTS from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import { addItem } from "../redux/cartSlice";
import { Link } from 'react-router-dom';
import { searchProducts } from "../redux/productSlice";
import { toast } from "react-toastify";
const Products = () => {
     
     const dispatch = useDispatch();
     const cartItems = useSelector((state) => state.cart.Addeditems);
     const PRODUCTS = useSelector((state)=> state.product.items);

     const addProduct = (product,index) => {
         dispatch(addItem(product));
         toast.success('Product added to cart');
         console.log(isInCart);
        };
     const handleIncrement = () =>{
             dispatch(increment());
     };
     const handleDecrement = () =>{
            dispatch(decrement());
     };
     const isInCart = (product) => {
        return cartItems.some((item) => item.id === product.id);
     }
     const [searchedProduct,setSearchdProduct] = useState("");
     const handleSetSearch = (e) =>{
        setSearchdProduct(e.target.value);
        dispatch(searchProducts(searchedProduct));
     }
     const sendToProductSlice = () =>{
             dispatch(searchProducts(searchedProduct));
     }
     const productLength = PRODUCTS.length;
     useEffect( () => {
        if(PRODUCTS.length == 0)
            {
                toast.error("No items found");
            }
     },[productLength]);
    return (
        <>
            
            <div className="searchProducts" >
                    <input value={searchedProduct} onChange={handleSetSearch} placeholder="Search for products" ></input>
                    <button onClick={sendToProductSlice}>SEARCH</button>
                </div>
            {PRODUCTS.length == 0 ? (
               <div className="Body" style={{height:"80vh"}}>Sorry No products as you searched {searchedProduct}</div>
            ) 
            : (
            <section className="Body"> 
                {PRODUCTS.slice(0,8).map((product, index) => (
                    <div className="container" key={index}>
                        <img src={product.image} alt={`image of ${product.title}`} />
                        <hr />
                        <b><p>{product.title}</p></b>
                         <p className="price"><b>PRICE : ${product.price}</b></p> 
                         <p className="descritption">DESCRIPTION : {product.description}</p>
                         {
                         isInCart(product) ? (
                         <button
                         className="Add-to-cart-btn"
                         onClick={() => addProduct(product, index)}><Link to="/cart" >
                         <b>GOTO  CART</b></Link> </button>)
                         : (<button
                         className="Add-to-cart-btn"
                         onClick={() => addProduct(product, index)}> 
                         <b>ADD TO CART</b> </button>
                         )}
                        <button onClick={handleIncrement} style={{padding:"8px",backgroundColor:"#1b687e",color:"white",borderRadius:"8px",marginLeft:"10px",border:"none",fontWeight:"600"}}>COUNT++</button>
                        <button onClick={handleDecrement} style={{padding:"8px",backgroundColor:"#986910",color:"white",borderRadius:"8px",marginLeft:"10px",border:"none",fontWeight:"600"}}>COUNT- -</button>
                    </div>
                ))}
            </section>
            )}
        </>
    );
}

export default Products;
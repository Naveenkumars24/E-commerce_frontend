import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "../constant";

const productSlice = createSlice(
    {
    name : "product",
    initialState : {
        items : PRODUCTS,
    },
    reducers : {
           searchProducts(state,action)
           { 
            if(action.payload == "")
             {
                state.items = PRODUCTS;
             }
             else{
                state.items = PRODUCTS.filter((product) => product.title.toLowerCase().includes(action.payload.toLowerCase()));
             }

           }
    }
}
);

export const {searchProducts} = productSlice.actions;
export default productSlice.reducer;
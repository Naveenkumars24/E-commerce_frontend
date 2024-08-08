import { createSlice } from "@reduxjs/toolkit";
import { increment } from "./counterSlice";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        Addeditems: [],
        totalQuantity: 0,
        },
    reducers : {
        addItem(state, action) {
            const product = action.payload;
            const itemExists = state.Addeditems.some(item => item.id === product.id);
            
            if (!itemExists) {
              state.totalQuantity += 1;
              state.Addeditems.push({ ...product,quantity :1});
            } else {
              console.log('Item',product.id,'already in the cart:');
            }
                 },
          removeItem(state,action){
              const product = action.payload;
              state.Addeditems = state.Addeditems.filter((item) => item.id != product.id);
            
              // state.Addeditems.shift(product);
              state.totalQuantity -= 1;
              
          },
          incrementItem(state,action)
          {
            const selectedItem = state.Addeditems.find(
                  (item) => item.id === action.payload.id
            );
            selectedItem.quantity += 1;
          },
          decrementItem(state,action)
          {
            const selectedItem = state.Addeditems.find(
                  (item) => item.id === action.payload.id
            );
            if(selectedItem.quantity > 1){
              selectedItem.quantity -= 1;
            };
          }
                }
});

export const {addItem ,removeItem,incrementItem ,decrementItem} = cartSlice.actions;
export default cartSlice.reducer;
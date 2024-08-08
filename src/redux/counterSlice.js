import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
   name : "Counter",
   initialState : {
    count : 0
   },
   reducers : {
    increment(state,action) {state.count += 1},
    decrement(state,action) {
            if(state.count != 0){
                state.count -= 1
            }
    }
    }
});

export const {increment,decrement} = counterslice.actions; // actions, named exports
export default counterslice.reducer; // default export 
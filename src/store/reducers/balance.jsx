import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState : {
    amount : 0,
  },
  reducers:{
    updatebalance :(state,action) => {
      state.amount = action.payload
    },
  }
  
})


export const { updateBalance} = counterSlice.actions

// console.log("----------",selectAmount)
// export const selectAmount = (state) => state.balance.value


export default counterSlice.reducer
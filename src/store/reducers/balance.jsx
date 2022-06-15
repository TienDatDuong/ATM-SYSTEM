import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    amount: 0,
  },
  reducers: {
    updatebalance: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { updatebalance } = counterSlice.actions;

export const selectAmount = (state) => state.balance.amount;

export default counterSlice.reducer;

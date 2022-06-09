import { configureStore } from "@reduxjs/toolkit";
// import accReducer from "./accSlice";
import balanceReducer from "./reducers/balance";

const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});

export default store;

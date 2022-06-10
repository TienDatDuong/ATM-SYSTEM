import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "../store/reducers/balance"

const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});

export default store;

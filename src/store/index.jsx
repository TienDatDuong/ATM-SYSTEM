import { configureStore } from "@reduxjs/toolkit";
// import accReducer from "./accSlice";
// import balanceReducer from "./reducers/balance";
import balanceReducer from "../store/reducers/balance"

const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});

export default store;

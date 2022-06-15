import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "../store/reducers/balance";
import billingReducer from "./reducerUser/user";
import historySlice from "./reducerHistory/transition";

const store = configureStore({
  reducer: {
    balance: balanceReducer,
    user: billingReducer,
    history: historySlice,
  },
});

export default store;

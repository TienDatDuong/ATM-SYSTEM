import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/user";
import historySlice from "./reducers/transition";

const store = configureStore({
  reducer: {
    user: userSlice,
    history: historySlice,
  },
});

export default store;

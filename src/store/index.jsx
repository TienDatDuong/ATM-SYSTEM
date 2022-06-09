import { configureStore } from "@reduxjs/toolkit"; 
import accReducer from "./accSlice";
import {createlogger} from "redux-logger"
import thunk from "redux-thunk";
const store = configureStore({
  reducer : {
    accReducer
  }
})

export default store
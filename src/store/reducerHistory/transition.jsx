import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const historySlice = createSlice({
  name: "history",
  initialState:{status:"",user:[]},
  reducers: {
 
  },
  extraReducers:builder => {
    builder
    .addCase(addhistory.pending,(state,action)=> {
        state.status = "Loading" ;
    } )
    .addCase(addhistory.fulfilled,(state,action)=>{
      state.status = "idle";
      state.user = action.payload;
    })  
  }
});


export const addhistory  = createAsyncThunk("user/addhistory",async (history)=> {
    const res = await axios.post(`https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/1/withdraws`,history)
    return res.data
})




export default historySlice.reducer;

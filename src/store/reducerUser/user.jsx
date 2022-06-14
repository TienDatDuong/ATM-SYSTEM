import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const billSlice = createSlice({
  name: "user",
  initialState:{status:"",user:[]},
  reducers: {
 
  },
  extraReducers:builder => {
    builder
    .addCase(getUser.pending,(state,action)=> {
        state.status = "Loading" ;
    } )
    .addCase(getUser.fulfilled,(state,action)=>{
      state.status = "idle";
      state.user = action.payload;
    })
    .addCase(updateUser.fulfilled,(state,action)=>{
      state.status = "idle";
      state.user.amount = action.payload;
      console.log("datdt",action)
    })
    
  }
});

export const getUser = createAsyncThunk("user/getUser",async (id) => {
  const res = await axios.get(`https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/${id}`)
  return res.data

} )

export const updateUser = createAsyncThunk("user/updateUser",async(id,totalWallet)=> {
  const res = await axios.put(`https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/${id}`,totalWallet)
  return res.data
})



export const selectUser = (state) => state.user.user

export const selectAmount = (state) => state.balance.amount;

export default billSlice.reducer;

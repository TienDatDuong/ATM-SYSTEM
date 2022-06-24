import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: { status: "", users: [], user: {}, balance: {}, withdraw: {} },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(getBalanceUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.balance = action.payload;
      })
      .addCase(getListUser.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(getListUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(updateUserBalance.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(createWithdraw.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(createWithdraw.fulfilled, (state, action) => {
        state.status = "idle";
        // state.withdraw.push(action.payload)
        state.withdraw = action.payload;
      })
      .addCase(UpDateTransfer.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      });
  },
});

export const getUser = createAsyncThunk("user/getUser", async (id) => {
  const res = await axios.get(`http://localhost:4001/api/accounts/${id}`);
  return res.data;
});

export const getBalanceUser = createAsyncThunk(
  "user/getBalanceUser",
  async (id) => {
    const res = await axios.get(
      `http://localhost:4001/api/accounts/${id}/balance-inquiry`
    );

    return res.data;
  }
);

export const getListUser = createAsyncThunk("user/getListUser", async () => {
  const res = await axios.get(`http://localhost:4001/api/accounts`);
  return res.data.accounts;
});

export const updateUserBalance = createAsyncThunk(
  "user/putUser",
  async ({ id, balance }) => {
    const res = await axios.patch(`http://localhost:4001/api/accounts/${id}`, {
      balance,
    });
    return res.data;
  }
);

export const createWithdraw = createAsyncThunk(
  "user/createWithdraw",
  async (newTransaction, thunkAPI) => {
    const res = await axios.post(
      `http://localhost:4001/api/accounts/${newTransaction.user_id}/withdraw`,
      newTransaction
    );
    // thunkAPI.dispatch(
    //   updateUserBalance({
    //     id:newTransaction._id,
    //     balance: newTransaction.balance - newTransaction.requsted_balance,
    //   })
    // );
    return res.data;
  }
);

export const UpDateTransfer = createAsyncThunk(
  "user/constUpDateTransfer",
  async (info, thunkAPI) => {
    const res = await axios.post(
      `https://628b0319667aea3a3e259443.mockapi.io/api/v1/transactions`,
      info
    );
    thunkAPI.dispatch(
      updateUserBalance({
        id: info.receiver_id,
        amount: +info.receiver_amounts,
      })
    );
    thunkAPI.dispatch(
      updateUserBalance({
        id: info.sender_id,
        amount: +info.sender_amounts,
      })
    );
    return res.data;
  }
);

export const selectUser = (state) => state.user.user;

export const selectBalance = (state) => state.user.balance;

export const updateBalance = (state) => state.user.withdraw;

export const getUsers = (state) => state.user.users;

export default userSlice.reducer;

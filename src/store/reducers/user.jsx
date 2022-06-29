import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "",
    users: [],
    user: {},
    balance: {},
    withdraw: {},
    transaction: [],
    pin:{}
  },
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
        state.withdraw = action.payload;
      })
      .addCase(UpDateTransfer.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(getListTransaction.fulfilled, (state, action) => {
        state.status = "idle";
        state.transaction = action.payload;
      })
      .addCase(getPin.fulfilled, (state, action) => {
        state.status = "idle";
        state.pin = action.payload;
      })
      .addCase(updateUserPin.fulfilled, (state, action) => {
        state.status = "idle";
        state.pin = action.payload;
      })
  },
});

export const getUser = createAsyncThunk("user/getUser", async (id) => {
  const res = await axios.get(`http://localhost:4001/api/accounts/${id}`);
  return res.data;
});

export const getPin = createAsyncThunk("user/getPin", async (id) => {
  const res = await axios.get(`http://localhost:4001/api/accounts/${id}/pin`);
  return res.data;
});

export const updateUserPin = createAsyncThunk(
  "user/updateUserPin",
  async ({ id, pin }) => {
    const res = await axios.patch(`http://localhost:4001/api/accounts/${id}/pin`, {
      pin,
    });
    return res.data;
  }
);

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

export const getListTransaction = createAsyncThunk(
  "user/getListTransaction",
  async () => {
    const res = await axios.get(
      `http://localhost:4001/api/tranactions`
    );
    return res.data.Transaction;
  }
);

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
      `http://localhost:4001/api/accounts/${newTransaction.accNumber}/withdraw`,
      newTransaction
    );
    return res.data;
  }
);

export const UpDateTransfer = createAsyncThunk(
  "user/UpDateTransfer",
  async (info, thunkAPI) => {
    const res = await axios.post(
      `http://localhost:4001/api/accounts/transfer`,
      info
    );
    return res.data;
  }
);

export const selectUser = (state) => state.user.user;

export const selectBalance = (state) => state.user.balance;

export const updateBalance = (state) => state.user.withdraw;

export const getUsers = (state) => state.user.users;

export const selectUserPin = (state) => state.user.pin

export const getTransaction = (state) => state.user.transaction;

export default userSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: { status: "", users: [], user: {} },
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
        state.user.push(action.payload);
      });
  },
});

export const getUser = createAsyncThunk("user/getUser", async (id) => {
  const res = await axios.get(
    `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/${id}`
  );
  return res.data;
});

export const getListUser = createAsyncThunk("user/getListUser", async () => {
  const res = await axios.get(
    `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts`
  );
  return res.data;
});

export const updateUserBalance = createAsyncThunk(
  "user/putUser",
  async ({ id, amount }) => {
    const res = await axios.put(
      `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/${id}`,
      { amount }
    );
    return res.data;
  }
);

export const createWithdraw = createAsyncThunk(
  "user/createWithdraw",
  async (history, thunkAPI) => {
    const res = await axios.post(
      `https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts/1/withdraws`,
      history
    );
    thunkAPI.dispatch(
      updateUserBalance({
        id: history.bank_accountId,
        amount: history.amount - history.requsted_amount,
      })
    );
    return res.data;
  }
);

export const selectUser = (state) => state.user.user;

export const getUsers = (state) => state.user.users;

export default userSlice.reducer;

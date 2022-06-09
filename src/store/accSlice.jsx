import { createSlice } from "@reduxjs/toolkit";

const accSlice = createSlice({
  requesting: false,
  //  khi bắt đầu tải nó sẽ báo true
  success: false,
  //  để mình biết request có success hay ko
  message: null,
  //  khi tải lỗi nó sẽ có message báo có lỗi
  data: null,
  //  để lưu trữ data tải xuống
});

const accReducer = accSlice.reducer;

export const accSelector = (state) => state.accReducer.accUser;

// action export
export const { addAmount } = accSlice.actions;

export default accReducer;

// name:"amount",
// initialState:{
//   accUser: {
//     amount :0
//   }
// },
// reducers : {
//   updateAmount : (state,action) => {
//     // state.accUser.splice(0,1,{
//     //   amount : action.payload
//     // })
//   }
// }
function getaccReducer (state =)

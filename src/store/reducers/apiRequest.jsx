import React from 'react'
import {loginFailed, loginStart, loginSuccess} from "./user"
import axios from 'axios'

const  apiRequest = async(user,dispatch,navigate) => {
  dispatch(loginStart())
  try{
    const res = await axios.post(`http://localhost:4001/api/login`,user)
    dispatch(loginSuccess(res.data))
    navigate("/admin/account")
  }catch(err){
    dispatch(loginFailed())
  }
  return (
    <div>apiRequest</div>
  )
}

export default apiRequest
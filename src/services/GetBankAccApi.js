// import axios from "axios";
// import React, { useEffect, useState } from "react";

import axios from "axios";



export default{
  getListAcc: ()=> axios.get(`https://628b0319667aea3a3e259443.mockapi.io/api/v1/bank_accounts`)
}
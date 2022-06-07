import { base } from "./baseURL";
import axios from "axios";

const getAllAccount = () => {
  return axios.get(`${base}/bank_accounts`);
};

const getAccount = (id) => {
  return axios.get(`${base}/bank_accounts/${id}`);
};

export { getAllAccount };
export { getAccount };

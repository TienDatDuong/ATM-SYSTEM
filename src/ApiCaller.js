import axios from "axios";
import * as Config from "./constant/Config"

export default function callApi(emdpoint,method="GET",body){
    return axios({
      method: method,
      url: `${Config.API_URL}/${emdpoint}`,
      data: body,
    }).catch((err) => {
        console.log("err", err);
      });
}
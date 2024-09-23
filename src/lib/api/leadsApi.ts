import axios from "axios";
import { IP } from "../consts";

export const GetLeads = async () => {
  const { data } = await axios({
    method: "get",
    url: `${IP}/api/v4/account`,
    headers: {
      Authorization: `Bearer`,
    },
  });
  console.log(data);
};

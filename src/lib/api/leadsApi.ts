import axios from "axios";
import { accessToken, IP } from "../consts";

export const GetLeads = async () => {
  const { data } = await axios({
    method: "get",
    url: `${IP}/api/v4/account`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(data);
};

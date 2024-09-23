import axios from "axios";
import { clientID, clientSecret, IP } from "../consts";

export const GetAccessToken = async (code: string) => {
  const sendData = {
    client_id: clientID,
    client_secret: clientSecret,
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "https://emfy-test-task.vercel.app/#/main",
  };
  console.log(sendData);
  const { data } = await axios({
    method: "post",
    url: `${IP}/oauth2/access_token`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(sendData),
  });
  console.log(data);
};

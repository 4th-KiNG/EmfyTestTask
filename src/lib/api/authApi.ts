import axios from "axios";
import { clientID, clientSecret, IP } from "../consts";

export const GetAccessToken = async (code: string) => {
  const sendData = {
    client_id: clientID,
    client_secret: clientSecret,
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "http://localhost:5173/#/main",
  };

  const { data } = await axios({
    method: "post",
    url: `${IP}/oauth2/access_token`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(sendData),
  });
  if (data) {
    localStorage.setItem("access_token", data.access_token);
  }
};

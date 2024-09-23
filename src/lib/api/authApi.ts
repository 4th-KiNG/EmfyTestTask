import axios from "axios";
import { clientID, clientSecret, IP } from "../consts";

export const GetAccessToken = async (code: string) => {
  console.log(code);

  const { data } = await axios({
    method: "POST",
    url: `${IP}/oauth2/access_token`,
    data: {
      client_id: clientID,
      client_secret: clientSecret,
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "http://localhost:5173/main",
    },
  });
};

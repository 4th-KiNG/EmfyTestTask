import { clientID } from "../consts";

export const redirectToAmo = () => {
  const authURL = `https://www.amocrm.ru/oauth?client_id=${clientID}&state=auth&mode=popup`;
  window.location.href = authURL;
};

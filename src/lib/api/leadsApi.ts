import axios from "axios";
import { accessToken, IP } from "../consts";

export const GetLeads = async (page: number) => {
  const { data } = await axios({
    method: "get",
    url: `${IP}/api/v4/leads?limit=3&page=${page}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data._embedded.leads;
};

export const GetLeadById = async (id: number) => {
  const { data } = await axios({
    method: "get",
    url: `${IP}/api/v4/leads/${id}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

import { useMutation } from "@tanstack/react-query";
import { GetAccessToken } from "../api/authApi";

export const useAuth = () => {
  const { mutate: GetAccessTokenFn } = useMutation({
    mutationKey: ["getAccessToken"],
    mutationFn: (code: string) => GetAccessToken(code),
  });

  return {
    GetAccessTokenFn,
  };
};

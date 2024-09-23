import { useEffect } from "react";
import { useAuth } from "../lib/hooks/useAuth";

const MainPage = () => {
  const { GetAccessTokenFn } = useAuth();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const authorizationCode = params.get("code");
    console.log(authorizationCode);
    if (authorizationCode) GetAccessTokenFn(authorizationCode);
  }, []);
  return (
    <>
      <p>123123</p>
    </>
  );
};

export default MainPage;

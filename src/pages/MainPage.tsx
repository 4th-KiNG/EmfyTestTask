import { useEffect } from "react";

const MainPage = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const authorizationCode = params.get("code");
    console.log(authorizationCode);
  }, []);
  return (
    <>
      <p>123123</p>
    </>
  );
};

export default MainPage;

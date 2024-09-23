import { redirectToAmo } from "../lib/utils/redirectToAmo";

const AuthPage = () => {
  return (
    <>
      <button onClick={redirectToAmo}>Авторизоваться через amoCRM</button>
    </>
  );
};

export default AuthPage;

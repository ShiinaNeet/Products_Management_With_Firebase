import React, { Component, useState } from "react";
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";
import { auth } from "../../lib/firebase";

const Login = () => {
  const user = auth.currentUser;
  const handleNavigation = (screen) => {
    setIsLogin(screen === 'login');
  };

  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {isLogin ? <LoginScreen navigate={handleNavigation} /> : <RegisterScreen navigate={handleNavigation} />}
    </div>
  );
};

export default Login;

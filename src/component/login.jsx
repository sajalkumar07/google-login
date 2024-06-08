import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div style={containerStyle}>
      {!isAuthenticated ? (
        <button style={buttonStyle} onClick={() => loginWithRedirect()}>Log In with Google</button>) : (
        <button style={buttonStyle} onClick={() => logout()}>Log Out</button>)}
    </div>
  );
};

export default LoginButton;

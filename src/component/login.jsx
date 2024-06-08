import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#4285F4",
  color: "white",
  border: "none",
  borderRadius: "4px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
};

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

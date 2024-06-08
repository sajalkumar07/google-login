import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

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

const iconStyle = {
  marginRight: "10px",
  backgroundColor: "white",
  borderRadius: "50%",
  padding: "5px",
};

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button style={buttonStyle} onClick={() => loginWithRedirect()}>
          <div style={iconStyle}>
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" width="20" height="20" />
          </div>
          Log In with Google
        </button>
      ) : (
        <button style={buttonStyle} onClick={() => logout()}>
          Log Out
        </button>
      )}
    </div>
  );
};

export default LoginButton;

import React, { useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GithubLogo from "../imgs/githubLogoSmall.svg";
import "./LoginHeader.css";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const Login = ({ isLoggedIn, handleLoginState, userName }) => {
  //create two separate states for the login
  // const [username, setUsername] = useState('');//******************change over to redux*********** */
  // const [password, setPassword] = useState('');//create a state for the login status
  // const [loginStatus, setLoginStatus] = useState(true);
  // const loginSubmit = () => {
  //     //insert auth api call
  // }

  function handleGithub() {
    location.href = "http://localhost:8080/auth/github";
  }

  return (
    <div className="login">
      {userName ? (
        <h1 className="helloMsg"> {`Hello ${userName.split(" ")[0]}`} </h1>
      ) : (
        <ThemeProvider theme={theme}>
          <Button
            className="helloMsg"
            startIcon={<GithubLogo />}
            color="neutral"
            variant="contained"
            type="button"
            onClick={handleGithub}
          >
            Login
          </Button>
        </ThemeProvider>
      )}
    </div>
  );
};

export default Login;

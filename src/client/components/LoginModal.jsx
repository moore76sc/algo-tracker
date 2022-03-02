/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './LoginModal.css';
import GithubLogo from '../imgs/githubLogoLarge.svg';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function handleGithub() {
  location.href = 'http://localhost:8080/auth/github';
}

function LoginModal({ loginClass, handleHide }) {
  return (
    <div className={loginClass}>
      <div className="innerModal">
        <GithubLogo className="svg" />
        <ThemeProvider theme={theme}>
          <Button
            className="loginGithubButton"
            color="neutral"
            variant="contained"
            type="button"
            onClick={handleGithub}
          >
            Login with Github
          </Button>
        </ThemeProvider>
        <button className="hideButton" type="button" onClick={handleHide}> Hide </button>
      </div>
    </div>
  );
}

export default LoginModal;

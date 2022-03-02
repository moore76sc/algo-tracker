import React, { useState } from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GithubLogo from '../imgs/githubLogoSmall.svg'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './LoginHeader.css';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function handleGithub() { location.href = 'http://localhost:8080/auth/github'; }


const Login = ({isLoggedIn, handleLoginState, userName, userAvatar}) => {//create two separate states for the login
  // const [username, setUsername] = useState('');//******************change over to redux*********** */
  // const [password, setPassword] = useState('');//create a state for the login status
  // const [loginStatus, setLoginStatus] = useState(true);
  // const loginSubmit = () => {
  //     //insert auth api call
  // }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="login">
      {userName ?
        <div className="loginSuccess">
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {`Hello ${userName.split(' ')[0]}`}
          </Button>
           <Avatar src={userAvatar} />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>

          {/* <h1 className="helloMsg"> {`Hello ${userName.split(' ')[0]}`} </h1>
          <Avatar src={userAvatar} /> */}
        </div>
        : <ThemeProvider theme={theme}>
            <Button className="helloMsg" startIcon={<GithubLogo/>} color="neutral" variant="contained" type="button" onClick={handleGithub}>Login</Button>
          </ThemeProvider>
      }
    </div>
  )
}

export default Login;

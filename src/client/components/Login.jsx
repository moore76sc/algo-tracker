import React, { useState } from "react";

const Login = ({isLoggedIn, handleLoginState}) => {//create two separate states for the login
    const [username, setUsername] = useState('');//******************change over to redux*********** */
    const [password, setPassword] = useState('');//create a state for the login status
    const [loginStatus, setLoginStatus] = useState(true);
    const loginSubmit = () => {
        //insert auth api call
    }

    return (
    
    <div>
      <div className="login">
        {/* <h1>Login</h1> */}
        <input type="text" placeholder="Username..."
        onChange={(event) => { //sets username in state to value at event.target.value
          setUsername(event.target.value)
        }}
        />
        <input type="password" placeholder="Password..."
        onChange={(event) => {//sets password in state to value at event.target.value
          setPassword(event.target.value)
        }}
        />
        <button onClick={loginSubmit}>Login</button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
    )
}

export default Login; 
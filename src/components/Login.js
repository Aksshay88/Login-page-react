// Login.js
import React, { useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleLogin = () => {
    // Perform login logic here, such as validating credentials
    // For this example, we'll just simulate a successful login
    setIsLoggedIn(true);
    setShowMessage(true); // Show the message
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
      {showMessage && isLoggedIn && <p>Successfully logged in!</p>}
    </div>
  );
};

export default Login;

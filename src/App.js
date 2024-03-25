// App.js
import React from "react";
import "./App.css"; // Import the CSS file
import Login from "./components/Login";

const App = () => {
  return (
    <div className="container">
      {" "}
      {/* Apply container class */}
      <div className="login-form">
        {" "}
        {/* Apply login-form class */}
        <Login />
      </div>
    </div>
  );
};

export default App;

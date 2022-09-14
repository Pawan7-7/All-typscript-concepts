import React, { useState } from "react";

export const Logged = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogIn = () => {
    setLoggedIn(true);
  };
  const handleLogOut = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <span> User is {isLoggedIn ? "You are in😎" : "you are out🤔"}</span>
    </div>
  );
};

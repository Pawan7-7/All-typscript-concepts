import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState(null);
  const handleLogIn = () => {
    setUser({
      name: "Pawan",
      email: "nepsonh@gmail.com",
    });
  };
  const handleLogOut = () => {
    setUser({
      name: "Pawan",
      email: "nepsonh@gmail.com",
    });
  };
  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

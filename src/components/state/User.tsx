import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogIn = () => {
    setUser({
      name: "Pawan",
      email: "nepsonh@gmail.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      Welcome!!! {user?.name}
    </div>
  );
};

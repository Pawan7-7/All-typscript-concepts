import React from "react";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
function App() {
  const personName = {
    first: "Logan",
    last: "Paul",
  };

  return (
    <div>
      <Greet name="Dr. Nepson" messageCount={69} isLoggedIn={true} />
      <Person name={personName} />
    </div>
  );
}

export default App;

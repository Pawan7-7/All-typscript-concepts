import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Logan",
    last: "Paul",
  };
  const personNameList = [
    { first: "Logan", last: "Paul" },
    { first: "jake", last: "Ranson" },
    { first: "Nate", last: "Hakim" },
  ];

  return (
    <div>
      <Greet name="Dr. Nepson" messageCount={69} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personNameList} />
      <Status status="loa" />
    </div>
  );
}

export default App;

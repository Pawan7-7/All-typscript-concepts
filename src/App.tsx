import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Nepson } from "./components/Nepson";
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
      <Status status="error" />
      <Heading>This will be heading!!!</Heading>
      <Nepson>
        <Heading>
          This is new heading this is also component and children of componet
        </Heading>
      </Nepson>
    </div>
  );
}

export default App;

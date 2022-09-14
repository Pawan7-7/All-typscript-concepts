import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Nepson } from "./components/Nepson";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Logged } from "./components/state/Logged";
import { User } from "./components/state/User";
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
      <User />
      {/* <Logged /> */}
      {/* <Greet name="Dr. Nepson" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personNameList} />
      <Status status="error" />
      <Heading>This will be heading!!!</Heading>
      <Nepson>
        <Heading>
          This is new heading this is also component and children of componet
        </Heading>
      </Nepson>
      <Button
        handleClick={() => {
          console.log("Clicked");
        }}
      /> */}
    </div>
  );
}

export default App;

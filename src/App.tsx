import { Button } from "./components/Button";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
// import { Person } from "./components/Person";
// import { PersonList } from "./components/PersonList";
// import { SearchFunctionality } from "./components/SearchFunction";
import { Status } from "./components/Status";

import { Hero } from "./components/Hero";
import { LogStatus } from "./components/state/LogStatus";
import { User } from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Box } from "./context/Box";
import { PassingList } from "./components/PassingList";
import { PersonData } from "./data";
import { Private } from "./auth/Private";
import { Profile } from "./auth/Profile";
import { List } from "./generics/List";

const App = () => {
  // const personName = {
  //   first: "Ashish",
  //   last: `Mohanty`,
  // };

  // const personList = [
  //   {
  //     first: "Ashish",
  //     last: "Mohnaty",
  //   },
  //   {
  //     first: "Ayush",
  //     last: "Mohnaty",
  //   },
  //   {
  //     first: "Ankita",
  //     last: "Mohnaty",
  //   },
  //   {
  //     first: "Arpita",
  //     last: "Mohnaty",
  //   },
  // ];

  return (
    <>
      <h1>Hello</h1>
      <Greet name="Ashish" time={10} isLoggedIn={true} />
      {/* <Person name={personName} />
        <PersonList name={personList} /> */}
      <Status status="loading" />

      <Heading>Placeholder text</Heading>
      {/* <SearchFunctionality /> */}

      <Button
        handleClick={() => {
          console.log("Button clicked");
        }}
      />

      <Hero />

      <LogStatus />
      <User />
      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <PassingList name={PersonData} />

      <Private isLoggedIN={true} component={Profile} />

      <List
        items={["hi", "bye", "gone", "came"]}
        onclick={(item) => console.log(item)}
      />

      <List items={[1, 2, 4]} onclick={(item) => console.log(item)} />
    </>
  );
};

export default App;

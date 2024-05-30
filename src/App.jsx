import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import duke from "./media/duke.jpg";
import perry from "./media/perry.jpg";
import tubby from "./media/tubby.jpg";
import whiskey from "./media/whiskey.jpg";

import { Routes, Route, Navigate } from "react-router-dom";

const defaultDogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!",
    ],
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs.",
    ],
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain.",
    ],
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore.",
    ],
  },
];
function App({ dogs = defaultDogs }) {
  return (
    <div>
      <Nav dogs={dogs} />
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </div>
  );
}

export default App;

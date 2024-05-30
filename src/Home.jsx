import React from "react";
import { Link } from "react-router-dom";

const Dogs = () => {
  return (
    <div>
      <h1>See the Dogs!</h1>
      <p>
        <Link to={"/dogs/duke"}>Duke</Link>
      </p>
      <p>
        <Link to={"/dogs/perry"}>Perry</Link>
      </p>
      <p>
        <Link to={"/dogs/tubby"}>Tubby</Link>
      </p>
      <p>
        <Link to={"/dogs/whiskey"}>Whiskey</Link>
      </p>
    </div>
  );
};

export default Dogs;

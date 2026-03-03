import { useState } from "react";
import "./index.css";

function Greetings({ name, age }) {
  return (
    <div>
      <h1>
        Hello I'm {name}, I'm {age} years old.
      </h1>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-pink-200 gap-2">
      <Greetings name={"Alex"} />
      <Greetings name={"Andrew"} />
    </div>
  );
}

export default App;

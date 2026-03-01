import { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-pink-100">
      <button onClick={() => setName("Alex")} className="text-6xl font-bold">
        Hello {name}
      </button>
    </div>
  );
}

export default App;

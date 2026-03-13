import SignUpForm from "./components/SignUpForm";
import "./index.css";
import { Link, Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-pink-200">
      <h1 className="text-4xl">Home Page</h1>
    </div>
  );
}
function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-pink-200">
      <h1 className="text-4xl">About Page</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav className="flex gap-4 mx-4 my-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="*"
          element={<h1 className="text-4xl text-center">404 Not Found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;

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
function ProfilePage() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-pink-200">
      <h1 className="text-4xl">Profile Page</h1>
    </div>
  );
}
function LoginPage() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-pink-200">
      <h1 className="text-4xl">Login Page</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav className="flex gap-4 px-4 py-2 bg-pink-300">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="*"
          element={<h1 className="text-4xl text-center">404 Not Found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;

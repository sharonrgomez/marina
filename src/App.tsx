import "./App.css";
import { Auth, Home } from "./pages";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context";
import Family from "./pages/Family";
import Logout from "./pages/Logout";

// todo - move nav code to its own component
function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              {user ? (
                <>
                  <span>{user.email}</span>
                  <Link to="/logout">Log out</Link>
                </>
              ) : (
                <>
                  <Link to="/signup">Sign up</Link>
                  <Link to="/login">Log in</Link>
                </>
              )}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/login" element={<Auth isLoggingIn />} />
          <Route path="/family" element={<Family />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { Auth, Home } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context";
import { Family, Logout, Welcome } from "./pages";
import { NavDrawer } from "./components";

// todo - move nav code to its own component
function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {user && <NavDrawer user={user} />}
      <div id="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/login" element={<Auth isLoggingIn />} />
          <Route path="/family" element={<Family />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

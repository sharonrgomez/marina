import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import "./App.css";
import { AuthForm } from "./components";
import logOut from "./firebase/auth/logOut";

function App() {
  const { isLoggingIn, setIsLoggingIn, user } = useContext(AuthContext);

  const handleSignUp = () => {
    setIsLoggingIn(false);
  };

  const handleLogIn = () => {
    setIsLoggingIn(true);
  };

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <>
      {user ? (
        <>
          <span>Signed in as {user?.email}</span>
          <button onClick={handleLogOut}>Log out</button>
        </>
      ) : (
        <>
          <button onClick={handleSignUp}>Sign up</button>
          <button onClick={handleLogIn}>Log in</button>
          <AuthForm isLoggingIn={isLoggingIn} />
        </>
      )}
    </>
  );
}

export default App;

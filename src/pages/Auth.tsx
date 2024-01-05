import { useState } from "react";
import logIn from "../firebase/auth/login";
import signUp from "../firebase/auth/signUp";
import { useNavigate } from "react-router-dom";

const Auth = ({ isLoggingIn }: { isLoggingIn?: boolean }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLoggingIn) {
        await logIn(email, password);
      } else {
        await signUp(email, password);
        navigate("/family");
      }
    } catch (error) {
      console.error("error", error);
    }

    return;
  };

  return (
    <div>
      <h1>{isLoggingIn ? "Log in" : "Sign up"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="johndoe@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit} type="submit">
          {isLoggingIn ? "Log in" : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export default Auth;

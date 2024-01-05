"use client";

import { useState } from "react";
import logIn from "../firebase/auth/login";
import signUp from "../firebase/auth/signUp";

type AuthFormProps = {
  isLoggingIn?: boolean;
};

const AuthForm = (props: AuthFormProps) => {
  const { isLoggingIn } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoggingIn) {
      await logIn(email, password);
    } else {
      await signUp(email, password);
    }

    return;
  };

  return (
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
  );
};

export default AuthForm;

import { useState } from "react";
import logIn from "../firebase/auth/login";
import signUp from "../firebase/auth/signUp";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Stack, Text } from "@chakra-ui/react";
import "../styles/auth.css";

const SignUpFields = ({
  setName,
  setEmail,
  setPassword,
  name,
  email,
  password,
}) => (
  <>
    <Input
      type="text"
      placeholder="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      variant="outline"
    />
    <Input
      type="email"
      placeholder="e-mail"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      variant="outline"
    />
    <Input
      type="password"
      placeholder="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      variant="outline"
    />
  </>
);

const LoginFields = ({ setEmail, setPassword, email, password }) => (
  <>
    <Input
      type="email"
      placeholder="e-mail"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      variant="outline"
    />
    <Input
      type="password"
      placeholder="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      variant="outline"
    />
  </>
);

const Auth = ({ isLoggingIn }: { isLoggingIn?: boolean }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLoggingIn) {
        await logIn(email, password);
      } else {
        await signUp(email, password);
      }
      navigate("/family/new");
    } catch (error) {
      console.error("error", error);
    }

    return;
  };

  // todo - clean this up
  return (
    <div id="auth">
      <Text className="auth-title" fontSize="4xl" marginBottom="1">
        {isLoggingIn ? "Log in" : "Sign up"}
      </Text>
      <Text className="auth-subtitle" fontSize="md" marginBottom="1">
        {isLoggingIn
          ? "Hello, welcome back!"
          : "Let's get started! Please fill out the following fields to create your account."}
      </Text>
      <form className="auth-form" onSubmit={handleSubmit}>
        <Stack className="auth-buttons" spacing={3}>
          {isLoggingIn ? (
            <LoginFields
              setEmail={setEmail}
              setPassword={setPassword}
              email={email}
              password={password}
            />
          ) : (
            <SignUpFields
              setEmail={setEmail}
              setPassword={setPassword}
              setName={setName}
              email={email}
              password={password}
              name={name}
            />
          )}
          <Button onClick={handleSubmit} type="submit" colorScheme="gray">
            {isLoggingIn ? "Log in" : "Sign up"}
          </Button>
          {isLoggingIn ? (
            <Text
              fontSize="md"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              minWidth="max-content"
            >
              Don't have an account?
              <Link to="/signup">
                <Text fontWeight="bolder" paddingLeft=".3rem">
                  Sign up
                </Text>
              </Link>
            </Text>
          ) : (
            <Text
              fontSize="md"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              minWidth="max-content"
            >
              Already have an account?
              <Link to="/login">
                <Text fontWeight="bolder" paddingLeft=".3rem">
                  Log in
                </Text>
              </Link>
            </Text>
          )}
        </Stack>
      </form>
    </div>
  );
};

export default Auth;

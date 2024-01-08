import { Link } from "react-router-dom";
import { Button, Image, Stack, Text } from "@chakra-ui/react";
import "../styles/layout.css";
import "../styles/welcome.css";

const Welcome = () => {
  return (
    <div className="layout">
      <Image src="/logo.png" alt="logo" className="welcome-logo" />
      <Text className="welcome-title" fontSize="5xl" marginBottom="1">
        marina
      </Text>
      <p className="layout-subtitle">
        Your baby's world at your fingertips. Track feedings, sleep, and more
        with ease. Welcome to parenting made simple!
      </p>
      <Stack spacing={1} className="layout-buttons">
        <Link to="/signup">
          <Button colorScheme="whiteAlpha" fontSize="1xl">
            Sign up
          </Button>
        </Link>
        <Link to="/login">
          <Button colorScheme="transparent" variant="outline" fontSize="1xl">
            Log in
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

export default Welcome;

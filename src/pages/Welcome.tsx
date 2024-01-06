import { Link } from "react-router-dom";
import { Button, Image, Text } from "@chakra-ui/react";
import "../styles/welcome.css";

const Welcome = () => {
  return (
    <div id="welcome">
      <Image src="/logo.png" alt="logo" className="welcome-logo" />
      <Text fontSize="3xl" marginBottom="2">
        marina
      </Text>
      <p>
        Your baby's world at your fingertips. Track feedings, sleep, and more
        with ease. Welcome to parenting made simple!
      </p>
      <div className="welcome-buttons">
        <Link to="/signup">
          <Button colorScheme="cyan" fontSize="1xl">
            Sign up
          </Button>
        </Link>
        <Link to="/login">
          <Button fontSize="1xl">Log in</Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

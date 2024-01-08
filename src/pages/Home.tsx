import "../styles/home.css";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const Home = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <div id="home">
      <Text fontSize="2xl" fontWeight="bold" py="2">
        Marina
      </Text>
      <Card
        width={isLargerThan600 ? "400px" : "92vw"}
        direction="row"
        overflow="hidden"
        variant="outline"
        border="none"
      >
        <Image objectFit="cover" maxW="100px" src="/logo.png" />
        <Stack alignItems="flex-start">
          <CardBody textAlign="left" color="#3f3f3f">
            <Text fontSize="sm">
              Age <b>2 weeks</b>
            </Text>

            <Text fontSize="sm">
              Last slept <b>1 hr ago</b>
            </Text>

            <Text fontSize="sm">
              Last ate <b>1.5 hrs ago (formula, 3oz)</b>
            </Text>
          </CardBody>
        </Stack>
      </Card>
      <Card></Card>
    </div>
  );
};

export default Home;

import { useEffect, useContext, useState } from "react";
import "../styles/home.css";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { getBabies } from "../firebase/firestore/user";

import { AuthContext } from "../context/AuthContext";
import { DocumentData } from "firebase/firestore";
const Home = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [babies, setBabies] = useState<DocumentData[]>([]);

  const auth = useContext(AuthContext);
  useEffect(() => {
    const userId = auth?.user?.uid;
    const fetchBubs = async () => {
      setBabies(await getBabies(userId));
    };
    if (userId) fetchBubs();
  }, [auth?.user?.uid]);

  return (
    <div id="home">
      <Text fontSize="2xl" fontWeight="bold" py="2">
        {babies?.[0]?.name ?? "Marina"}
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

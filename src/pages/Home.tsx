import { useEffect, useContext, useState } from "react";
import "../styles/home.css";
import {
  Button,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { getBabies } from "../firebase/firestore/user";

import { AuthContext } from "../context/AuthContext";
import {
  DocumentData,
  DocumentReference,
  QueryDocumentSnapshot,
  Timestamp,
} from "firebase/firestore";
import { addFeeding, getLatestFeeding } from "../firebase/firestore/feedings";
const Home = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [babies, setBabies] =
    useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>();
  const [lastFed, setLastFed] = useState<DocumentData>();

  const auth = useContext(AuthContext);
  useEffect(() => {
    const userId = auth?.user?.uid;
    const fetchBubs = async () => {
      setBabies(await getBabies(userId));
    };
    if (userId) fetchBubs();
  }, [auth?.user?.uid]);

  let baby: DocumentData | undefined;
  let babyRef: DocumentReference | undefined;

  babies?.forEach((snapshot) => {
    baby = snapshot.data();
    babyRef = snapshot.ref;
  });

  useEffect(() => {
    const x = async () => {
      if (!babyRef) return;
      setLastFed((await getLatestFeeding(babyRef)).docs.at(0)?.data());
    };
    x();
  }, [babyRef]);

  return (
    <div id="home">
      <Text fontSize="2xl" fontWeight="bold" py="2">
        {baby?.name ?? "Marina"}
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
      <Card>
        <Text>
          {lastFed?.amount}
          {lastFed?.unit}
        </Text>

        <Text>{lastFed?.type}</Text>
      </Card>
      <Button
        onClick={() => {
          if (!babyRef) throw "no baby";
          addFeeding(babyRef, {
            amount: 3.5,
            unit: "oz",
            type: "expressed",
            time: Timestamp.fromDate(new Date()),
          });
        }}
      >
        Baby Eated
      </Button>
    </div>
  );
};

export default Home;

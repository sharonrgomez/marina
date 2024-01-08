"use client";

import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { createFamily } from "../firebase/firestore/family";
import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";
import "../styles/family-create.css";
import { BabyForm } from "../components";

export type Baby = {
  name: string;
  dob: string;
  gender?: "boy" | "girl";
};

const Babies = ({
  babies,
  setBabies,
}: {
  babies: Baby[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setBabies: Dispatch<SetStateAction<Baby[]>>;
}) =>
  babies.map((baby, i) => {
    return (
      <BabyForm
        baby={baby}
        hasMultipleBabies={babies.length === 1}
        index={i}
        key={i}
        setName={(name) =>
          setBabies((prev) => {
            const newBabies = [...prev];
            newBabies[i].name = name;
            return newBabies;
          })
        }
        setBday={(bday) =>
          setBabies((prev) => {
            const newBabies = [...prev];
            newBabies[i].dob = bday;
            return newBabies;
          })
        }
      />
    );
  });

const Family = () => {
  const [familyName, setFamilyName] = useState("");
  const [babies, setBabies] = useState<Baby[]>([
    { name: "", dob: "", gender: "girl" },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await createFamily(familyName, babies);
    console.error(error);

    return;
  };

  const handleAddAnotherBaby = () => {
    setBabies([...babies, { name: "", dob: "" }]);
  };

  return (
    <div className="layout">
      <Text className="layout-title" fontSize="4xl" marginBottom="1">
        Create a Family
      </Text>
      <Text className="layout-subtitle" fontSize="md" marginBottom="1">
        Tell us more about your family. This will allow you to share your
        account with your partner.
      </Text>
      <form className="layout-form" onSubmit={handleSubmit}>
        <Stack className="layout-buttons" spacing={3}>
          <Input
            type="text"
            placeholder="your family's name"
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
          />

          <Babies babies={babies} setBabies={setBabies} />

          <Button
            onClick={handleAddAnotherBaby}
            colorScheme="transparent"
            variant="outline"
          >
            Add another child
          </Button>

          <Button onClick={handleSubmit} type="submit" colorScheme="purple">
            Let's go!
          </Button>
          <Text
            fontSize="md"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            minWidth="max-content"
          >
            Trying to join an existing family? Join a family{" "}
            <Link to="/family/join">
              <Text fontWeight="bolder" paddingLeft=".3rem" as="span">
                here
              </Text>
            </Link>
          </Text>
        </Stack>
      </form>
    </div>
  );
};

export default Family;

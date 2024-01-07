"use client";

import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { createFamily } from "../firebase/firestore/family";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/family-create.css";

const Family = () => {
  const [familyName, setFamilyName] = useState("");
  const [babies, setBabies] = useState([{ name: "", bday: "" }]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _, error } = await createFamily(familyName);
    console.log(error);

    return;
  };

  const BabyFields = ({ name, bday }: { name: string; bday: string }) => {
    return (
      <div className="family-create-baby-card">
        <Input
          type="text"
          placeholder="Baby's name"
          value={name}
          onChange={() => {}}
        />
        <Input
          type="text"
          placeholder="Baby's birthday"
          value={bday}
          onChange={() => {}}
        />
      </div>
    );
  };

  const Babies = () =>
    babies.map((baby, i) => {
      return <BabyFields key={i} name={baby.name} bday={baby.bday} />;
    });

  const handleAddAnotherBaby = () => {
    setBabies([...babies, { name: "", bday: "" }]);
  };

  return (
    <div id="auth">
      <Text className="auth-title" fontSize="4xl" marginBottom="1">
        Create a Family
      </Text>
      <Text className="auth-subtitle" fontSize="md" marginBottom="1">
        Tell us more about your family. This will allow you to share your
        account with your partner.
      </Text>
      <form className="auth-form" onSubmit={handleSubmit}>
        <Stack className="auth-buttons" spacing={3}>
          <Input
            type="text"
            placeholder="Name of your family"
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
          />

          <Babies />

          <Button
            onClick={handleAddAnotherBaby}
            colorScheme="transparent"
            variant="outline"
          >
            Add another child
          </Button>

          <Button onClick={handleSubmit} type="submit" colorScheme="gray">
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
              <Text fontWeight="bolder" paddingLeft=".3rem">
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

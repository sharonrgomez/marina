"use client";

import { Button } from "@chakra-ui/react";
import { createFamily } from "../firebase/firestore/family";
import { useState } from "react";

const Family = () => {
  const [familyName, setFamilyName] = useState("");
  const [babies, setBabies] = useState([{ name: "", bday: "" }]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { _, error } = await createFamily(familyName);
    console.log(error);

    return;
  };

  const BabyFields = ({ name, bday }: { name: string; bday: string }) => {
    return (
      <div>
        <input
          type="text"
          placeholder="Baby's name"
          value={name}
          onChange={() => {}}
        />
        <input
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
    <>
      <h1>Family</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="The Smith Family"
          value={familyName}
          onChange={(e) => setFamilyName(e.target.value)}
        />

        <Babies />

        <Button onClick={handleAddAnotherBaby}>Add another bb</Button>

        <Button onClick={handleSubmit} type="submit">
          Create family
        </Button>
      </form>
    </>
  );
};

export default Family;

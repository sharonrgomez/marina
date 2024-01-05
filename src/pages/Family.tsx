"use client";

import { useState } from "react";

const UserForm = () => {
  const [familyName, setFamilyName] = useState("");
  const [babies, setBabies] = useState([{ name: "", bday: "" }]);

  const handleSubmit = async (e) => {
    e.preventDefault();

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

        <button onClick={handleAddAnotherBaby}>Add another bb</button>

        <button onClick={handleSubmit} type="submit">
          Create family
        </button>
      </form>
    </>
  );
};

export default UserForm;

import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { Baby } from "../pages/FamilyCreate";

const BabyForm = ({ babies, index }: { babies: Baby[]; index: number }) => {
  const [name, setName] = useState("");
  const [bday, setBday] = useState("");

  return (
    <div className="baby-card">
      <Input
        type="text"
        placeholder={
          babies.length === 1 ? "baby's name" : `baby ${index + 1}'s name`
        }
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="date"
        value={bday}
        onChange={(e) => setBday(e.target.value)}
      />
    </div>
  );
};

export default BabyForm;

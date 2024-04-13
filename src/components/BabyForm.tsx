import { Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Baby } from "../pages/FamilyCreate";

const BabyForm = ({
  baby,
  setName,
  setDOB,
  setGender,
  setPicture,
}: {
  baby: Baby;
  hasMultipleBabies: boolean;
  index: number;
  setName: (name: Baby["name"]) => void;
  setDOB: (dob: Baby["dob"]) => void;
  setGender: (gender: Baby["gender"]) => void;
  setPicture: (pic: Baby["picture"]) => void;
}) => {
  return (
    <div className="baby-card">
      <Stack spacing={2}>
        <Input
          type="text"
          placeholder="Name"
          value={baby.name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="date"
          value={baby.dob}
          onChange={(e) => setDOB(e.target.value)}
        />
        <RadioGroup
          onChange={setGender}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Radio value="boy">Boy</Radio>
          <Radio paddingLeft="10px" value="girl">
            Girl
          </Radio>
        </RadioGroup>
        <input type="file" onChange={(e) => setPicture(e.target.value)} />
      </Stack>
    </div>
  );
};

export default BabyForm;

import { Input } from "@chakra-ui/react";
import { Baby } from "../pages/FamilyCreate";

const BabyForm = ({
  baby,
  hasMultipleBabies,
  index,
  setName,
  setBday,
}: {
  baby: Baby;
  hasMultipleBabies: boolean;
  index: number;
  setName: (name: string) => void;
  setBday: (bday: string) => void;
}) => {
  return (
    <div className="baby-card">
      <Input
        type="text"
        placeholder={
          hasMultipleBabies ? "baby's name" : `baby ${index + 1}'s name`
        }
        value={baby.name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="date"
        value={baby.dob}
        onChange={(e) => setBday(e.target.value)}
      />
    </div>
  );
};

export default BabyForm;

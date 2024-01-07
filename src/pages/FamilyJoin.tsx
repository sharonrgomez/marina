"use client";

import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Family = () => {
  const [familyID, setFamilyID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { _, error } = await joinFamily(familyName);
    // console.log(error);

    return;
  };

  return (
    <div id="auth">
      <Text className="auth-title" fontSize="4xl" marginBottom="1">
        Join an existing Family
      </Text>
      <Text className="auth-subtitle" fontSize="md" marginBottom="1">
        Please provide the id of the Family you'd like to join. This can be
        found under the "Settings" tab in your partner's account.
      </Text>
      <form className="auth-form" onSubmit={handleSubmit}>
        <Stack className="auth-buttons" spacing={3}>
          <Input
            type="text"
            placeholder="Family ID"
            value={familyID}
            onChange={(e) => setFamilyID(e.target.value)}
          />

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
            Don't have a Family? Create one{" "}
            <Link to="/family/new">
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

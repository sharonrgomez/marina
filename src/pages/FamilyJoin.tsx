"use client";

import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";

const Family = () => {
  const [familyID, setFamilyID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { _, error } = await joinFamily(familyName);
    // console.log(error);

    return;
  };

  return (
    <div className="layout">
      <Text className="layout-title" fontSize="4xl" marginBottom="1">
        Join an existing Family
      </Text>
      <Text className="layout-subtitle" fontSize="md" marginBottom="1">
        Please provide the id of the Family you'd like to join. This can be
        found under the "Settings" tab in your partner's account.
      </Text>
      <form className="layout-form" onSubmit={handleSubmit}>
        <Stack className="layout-buttons" spacing={3}>
          <Input
            type="text"
            placeholder="Family ID"
            value={familyID}
            onChange={(e) => setFamilyID(e.target.value)}
          />

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
            Don't have a Family? Create one{" "}
            <Link to="/family/new">
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

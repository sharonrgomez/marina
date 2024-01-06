import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav-drawer.css";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavDrawer = ({ user }: { user?: User | null }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <div id="nav-drawer">
        <Button ref={btnRef} colorScheme="cyan" onClick={onOpen}>
          <HamburgerIcon />
        </Button>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{user?.email}</DrawerHeader>
          <DrawerBody>
            <Stack spacing={3}>
              <Link to="/">
                <Text fontSize="1xl">Home</Text>
              </Link>
              <Link to="/logout">
                <Text fontSize="1xl">Log out</Text>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;

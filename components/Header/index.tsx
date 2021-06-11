import React from "react";
import { Avatar, Box, Flex, Heading, Button } from "@chakra-ui/react";
import NavLink from "../NavLink";
import { linksOnHeader } from "./../../config/constant";

const Header = () => {
  let user = false;
  return (
    <Flex
      bg="blue.100"
      p="3"
      justifyContent="space-between"
      alignItems="center"
      mb={5}
    >
      <Heading color="purple.400" ml={5}>
        Web Log
      </Heading>
      <Box as="span" d="flex">
        {linksOnHeader.map((link, idx) => {
          return (
            <NavLink
              key={idx}
              displayText={link.displayText}
              href={link.href}
            />
          );
        })}
        {user ? (
          <Box ml={5}>
            <Button colorScheme="blue" mr={4}>
              Log In
            </Button>
            <Button colorScheme="blue">Sign Up</Button>
          </Box>
        ) : (
          <Avatar ml={5}></Avatar>
        )}
      </Box>
    </Flex>
  );
};

export default Header;

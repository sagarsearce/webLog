import React from "react";
import nextLink from "next/link";
import { Link, Box } from "@chakra-ui/react";
import { InavLink } from "./../../config/interfaces";

const NavLink: React.FC<InavLink> = ({ displayText, href }) => {
  return (
    <Box m={3}>
      <Link colorScheme="cyan" fontWeight="extrabold" as={nextLink} href={href}>
        {displayText}
      </Link>
    </Box>
  );
};

export default NavLink;

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../config/theme";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      {children}
    </ChakraProvider>
  );
};

export default Layout;

import { Container } from "@chakra-ui/layout";
import React from "react";
import CreateBlog from "../../../../components/CreateBlog";
import CustomEditor from "../../../../components/CustomEditor";

const EditBlog = () => {
  return (
    <Container>
     {/* <CreateBlog/> */}
     <CustomEditor/>
    </Container>
  );
};

export default EditBlog;


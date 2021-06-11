import { Badge, Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { IBlog } from "./../../config/interfaces";
import shortString from "../../utils/stringShortner";

interface propType {
  blog: IBlog;
}

const BlogTile: React.FC<propType> = ({ blog }) => {
  return (
    <Box
      borderRadius="sm"
      bg="gray.100"
      boxShadow="md"
      maxW="800px"
      mb="5"
      p="3"
      mx="auto"
    >
      <Text>{blog.title}</Text>
      <Text> {shortString(blog.description, 200)}</Text>
      <Text>{blog.createdAt}</Text>
      {blog.tags.map((tag, idx) => (
        <Badge key={idx}>{tag}</Badge>
      ))}
    </Box>
  );
};

export default BlogTile;

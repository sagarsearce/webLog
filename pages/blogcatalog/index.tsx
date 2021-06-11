import { Center, FormControl, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import BlogTile from "../../components/BlogTile";
import { IBlog } from "../../config/interfaces";
import { GetStaticProps, InferGetStaticPropsType } from 'next'

// let blogData: IBlog[] = [
//   {
//     id: 1,
//     title: "sagar",
//     content: "",
//     readTime: "9 Min",
//     author: "sagar dhandhalya",
//     descreption:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati non a nemo, consequuntur quam alias neque distinctio esse hic nihil, unde modi, at veniam aspernatur iste dicta doloremque voluptates dignissimos eligendi vel dolorum? Itaque harum ratione sed iste quas. Omnis.",
//     createdAt: "29 Nov,2020",
//     updatedAt: "30 Nov, 2020",
//     Tags: ["java sctipt", "web devlopment", "learning"],
//   },
//   {
//     id: 2,
//     title: "samir",
//     content: "",
//     readTime: "9 Min",
//     author: "sagar dhandhalya",
//     descreption:
//       "Lorem ipsum, dolor .. sit amet consectetur adipisicing elit. Obcaecati non a nemo, consequuntur quam alias neque distinctio esse hic nihil, unde modi, at veniam aspernatur iste dicta doloremque voluptates dignissimos eligendi vel dolorum? Itaque harum ratione sed iste quas. Omnis.",
//     createdAt: "29 Nov,2020",
//     updatedAt: "30 Nov, 2020",
//     Tags: ["java sctipt", "web devlopment", "learning"],
//   },
//   {
//     id: 3,
//     title: "sheetal",
//     content: "",
//     readTime: "9 Min",
//     author: "sagar dhandhalya",
//     descreption:
//       "Lorem ipsum, xyz dolor sit amet consectetur adipisicing elit. Obcaecati non a nemo, consequuntur quam alias neque distinctio esse hic nihil, unde modi, at veniam aspernatur iste dicta doloremque voluptates dignissimos eligendi vel dolorum? Itaque harum ratione sed iste quas. Omnis.",
//     createdAt: "29 Nov,2020",
//     updatedAt: "30 Nov, 2020",
//     Tags: ["ok", "web123", "sam"],
//   },
// ];

const BlogCatalog:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({articles}) => {
  const [searchText, setSearchText] = useState<string>("");
  const ShouldIncludeBlog = (title, descreption, tagsText) => {
    let text = searchText.toLowerCase();
    return (
      title.indexOf(text) > -1 ||
      descreption.indexOf(text) > -1 ||
      tagsText.indexOf(text) > -1
    );
  };

  let updatedData = articles.filter((blog) =>
    ShouldIncludeBlog(
      blog.title,
      blog.descreption,
      blog.tags.join(" ").toLowerCase()
    )
  );
  console.log(updatedData);
  
  return (
    <>
      <Center mb={5}>
        <FormControl w="xl" id="search field">
          <Input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="SEARCH YOUR BLOG..."
          />
        </FormControl>
      </Center>
      {updatedData.map((blog) => (
        <BlogTile key={blog.id} blog={blog} />
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let res = await fetch('http://localhost:4400/api/article')
  let articles:IBlog[] = await res.json()
  return {
    props:{
      articles
    }
  }
}


export default BlogCatalog;

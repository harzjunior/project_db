import React from "react";
import { blogData } from "../../utils/blogData";
import BlogItem from "./BlogItem";

function BlogSection({ isHomePage }) {
  const displayCoursesData = isHomePage ? blogData.slice(0, 3) : blogData;

  return (
    <>
      {displayCoursesData.map((blog, index) => (
        <BlogItem
          key={index}
          date={blog.date}
          month={blog.month}
          year={blog.year}
          imgSrc={blog.imgSrc}
          title={blog.title}
          href={blog.url}
          content={blog.content}
          admin={blog.admin}
          comments={blog.comments}
        />
      ))}
    </>
  );
}

export default BlogSection;

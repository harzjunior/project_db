import React from "react";
import { RecentBlogItem } from "./RecentBlogItem";
import recentBlogData from "../../utils/recentBlogData";

function RecentBlogSection() {
  return (
    <>
      {recentBlogData.map((blog, index) => (
        <RecentBlogItem
          key={index}
          title={blog.title}
          href={blog.url}
          imgSrc={blog.imgSrc}
          author={blog.author}
          comments={blog.comments}
        />
      ))}
    </>
  );
}

export default RecentBlogSection;

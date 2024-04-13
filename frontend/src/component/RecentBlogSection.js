import React from "react";
import { RecentBlogItem } from "./RecentBlogItem";
import recentBlogData from "../../utils/recentBlogData";

function RecentBlogSection({ isHomeBlog }) {
  const displayRecentBlogData = isHomeBlog
    ? recentBlogData.slice(0, 2)
    : recentBlogData;

  return (
    <>
      {displayRecentBlogData.map((blog, index) => (
        <RecentBlogItem
          key={index}
          title={blog.title}
          href={blog.url}
          imgSrc={blog.imgSrc}
          date={blog.date}
          author={blog.author}
          comments={blog.comments}
        />
      ))}
    </>
  );
}

export default RecentBlogSection;

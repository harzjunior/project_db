import React from "react";

export default function ArticleAuthor({ imgSrc, alt, className, title, desc }) {
  return (
    <>
      <div className="about-author d-flex p-4 bg-light">
        <div className="bio mr-5">
          <img src={imgSrc} alt={alt} className={className} />
        </div>
        <div className="desc">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}

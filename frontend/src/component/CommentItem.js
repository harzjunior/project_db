import Link from "next/link";
import React from "react";

export default function CommentItem({
  srcImg,
  title,
  commentedDate,
  comment,
  href,
}) {
  return (
    <>
      {/* Render the commenter's image */}
      <div className="vcard bio">
        <img src={srcImg} alt="Image placeholder" />
      </div>
      {/* Render the comment details */}
      <div className="comment-body">
        <h3>{title}</h3>
        <div className="meta mb-2">{commentedDate}</div>
        <p>{comment}</p>
        {/* Provide a reply link */}
        <p>
          <Link href="#" className="reply">
            Reply
          </Link>
        </p>
      </div>
    </>
  );
}

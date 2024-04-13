import CommentItem from "./CommentItem";

const CommentReplies = ({ replies, depth, maxDepth }) => {
  return (
    <ul className="children">
      {/* Mapping through each reply */}
      {replies.map((reply, index) => (
        <li className="comment" key={index}>
          {/* Rendering CommentItem for the current reply */}
          <CommentItem
            srcImg={reply.srcImg}
            title={reply.title}
            commentedDate={reply.commentedDate}
            comment={reply.comment}
            // href={reply.href}
          />
          {/* Checking if current reply has further replies and depth is less than maxDepth */}
          {reply.replies && reply.replies.length > 0 && depth < maxDepth && (
            // If yes, recursively render CommentReplies component with appropriate props
            <CommentReplies
              replies={reply.replies} // Pass replies array of the current reply
              depth={depth + 1} // Increment depth for the nested level
              maxDepth={maxDepth} // Pass maxDepth
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default CommentReplies;

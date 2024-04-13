import commentsData from "../../utils/commentsData";
import CommentReplies from "./CommentReplies";
import CommentItem from "./CommentItem";

const CommentList = () => {
  // Function to render comments recursively
  const renderComments = (comments, depth, maxDepth) => {
    return (
      <ul className="comment-list">
        {/* Mapping through each comment */}
        {comments.map((comment, index) => (
          <li className="comment" key={index}>
            {/* Rendering CommentItem for the current comment */}
            <CommentItem
              srcImg={comment.srcImg}
              title={comment.title}
              commentedDate={comment.commentedDate}
              comment={comment.comment}
              //   href={comment.href}
            />
            {/* Checking if current comment has replies and depth is less than maxDepth */}
            {comment.replies &&
              comment.replies.length > 0 &&
              depth < maxDepth && (
                // If yes, render CommentReplies component with appropriate props
                <CommentReplies
                  replies={comment.replies} // Pass replies array
                  depth={depth + 1} // Increment depth for the nested level
                  maxDepth={maxDepth} // Pass maxDepth
                />
              )}
          </li>
        ))}
      </ul>
    );
  };

  // Initialize depth as 0 and render the comments
  return renderComments(commentsData, 0, 3);
};

export default CommentList;

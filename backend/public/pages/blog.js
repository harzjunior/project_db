document
  .getElementById("commentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const commentName = document.getElementById("commentName").value;
    const commentEmail = document.getElementById("commentEmail").value;
    const commentText = document.getElementById("commentMessage").value;

    // Send a POST request to submit the comment
    fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        guest_name: commentName,
        guest_email: commentEmail,
        comment_text: commentText,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Server error: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        // Clear the form fields
        document.getElementById("commentForm").reset();
        console.log(data); // Log the response for debugging
        alert("Comment submitted successfully!");
        // Fetch and display comments after submission
        fetchAndDisplayComments();
      })
      .catch((error) => console.error("Error submitting comment:", error));
  });

// Function to fetch and display comments
function fetchAndDisplayComments() {
  // Fetch comments from the server
  fetch("/api/comment")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      return response.json();
    })
    .then((comments) => {
      // Display comments on the page
      renderComments(comments);
    })
    .catch((error) => console.error("Error fetching comments:", error));
}

// Function to render comments on the page
function renderComments(comments) {
  const commentList = document.getElementById("commentList");
  const template = document.getElementById("comment-item-template");

  // Clear existing comments
  commentList.innerHTML = "";
  // Loop through the comments and update the existing HTML elements
  comments.forEach((comment) => {
    // Get the existing elements from HTML
    const commentItem = template.cloneNode(true);
    commentItem.removeAttribute("style"); // Remove the hidden style

    const commentName = commentItem.querySelector(".comment-name");
    const commentEmail = commentItem.querySelector(".comment-email");
    const commentText = commentItem.querySelector(".comment-text");
    const commentCreatedAt = commentItem.querySelector(".comment-created-at");

    // Update the text content of the existing elements
    commentName.textContent = comment.guest_name || "Guest";
    commentEmail.textContent = comment.guest_email || "guest@example.com";
    commentText.textContent = comment.comment_text;
    // commentCreatedAt.textContent = new Date(comment.createdAt).toLocaleString(); // Convert createdAt to a readable date format
    // Convert createdAt to a readable date format
    const createdAtDate = new Date(comment.createdAt);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
      timeZone: "Africa/Lagos", // WAT time zone
    };
    const formattedDate = createdAtDate.toLocaleString("en-US", options);
    commentCreatedAt.textContent = formattedDate;
    // Append the updated comment item to the commentList
    commentList.appendChild(commentItem);
  });
}

// Call the fetchAndDisplayComments function when the page loads
document.addEventListener("DOMContentLoaded", fetchAndDisplayComments);

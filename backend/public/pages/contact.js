document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const contactName = document.getElementById("contactName").value;
    const contactEmail = document.getElementById("contactEmail").value;
    const contactMessage = document.getElementById("contactMessage").value;

    // Send a POST request to submit the contact message
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: contactName,
        email: contactEmail,
        message: contactMessage,
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
        document.getElementById("contactForm").reset();
        alert("Message submitted successfully!");
        // Fetch and display contacts after submission
        // fetchAndDisplayContacts();
      })
      .catch((error) => console.error("Error submitting message:", error));
  });

// Function to fetch and display contacts
// function fetchAndDisplayContacts() {
//   // Fetch contacts from the server
//   fetch("/api/contact")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to fetch contacts");
//       }
//       return response.json();
//     })
//     .then((contacts) => {
//       // Display contacts on the page
//       renderContacts(contacts);
//     })
//     .catch((error) => console.error("Error fetching contacts:", error));
// }

// Function to render contacts on the page
// function renderContacts(contacts) {
//   const contactList = document.getElementById("contactList");
//   const template = document.getElementById("contact-item-template");

//   // Clear existing contacts
//   contactList.innerHTML = "";
//   // Loop through the contacts and update the existing HTML elements
//   contacts.forEach((contact) => {
//     // Get the existing elements from HTML
//     const contactItem = template.cloneNode(true);
//     contactItem.removeAttribute("style"); // Remove the hidden style

//     const contactName = contactItem.querySelector(".contact-name");
//     const contactEmail = contactItem.querySelector(".contact-email");
//     const contactMessage = contactItem.querySelector(".contact-message");
//     const contactCreatedAt = contactItem.querySelector(".contact-created-at");

//     // Update the text content of the existing elements
//     contactName.textContent = contact.name;
//     contactEmail.textContent = contact.email;
//     contactMessage.textContent = contact.message;
//     contactCreatedAt.textContent = new Date(contact.createdAt).toLocaleString(); // Convert createdAt to a readable date format

//     // Append the updated contact item to the contactList
//     contactList.appendChild(contactItem);
//   });
// }

// Call the fetchAndDisplayContacts function when the page loads
// document.addEventListener("DOMContentLoaded", fetchAndDisplayContacts);

// admin.js

document.addEventListener("DOMContentLoaded", () => {
  const contactsBtn = document.getElementById("contactsBtn");
  const usersBtn = document.getElementById("usersBtn");
  const contactsSection = document.getElementById("contactsSection");
  const usersSection = document.getElementById("usersSection");
  const contactTable = document
    .getElementById("contactTable")
    .getElementsByTagName("tbody")[0];
  const userTable = document
    .getElementById("userTable")
    .getElementsByTagName("tbody")[0];

  // Function to fetch and populate contacts data
  const fetchAndPopulateContacts = async () => {
    try {
      const response = await fetch("/api/contact");
      const contacts = await response.json();
      contactTable.innerHTML = ""; // Clear previous content
      contacts.forEach((contact) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.message}</td>
          `;
        contactTable.appendChild(row);
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // Function to fetch and populate users data
  const fetchAndPopulateUsers = async () => {
    try {
      const response = await fetch("/api/register");
      const users = await response.json();
      userTable.innerHTML = ""; // Clear previous content
      users.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${new Date(user.createdAt).toLocaleString()}</td>
          `;
        userTable.appendChild(row);
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Display contacts section and fetch contacts data when contacts button is clicked
  contactsBtn.addEventListener("click", async () => {
    contactsSection.style.display = "block";
    usersSection.style.display = "none";
    await fetchAndPopulateContacts();
  });

  // Display users section and fetch users data when users button is clicked
  usersBtn.addEventListener("click", async () => {
    contactsSection.style.display = "none";
    usersSection.style.display = "block";
    await fetchAndPopulateUsers();
  });
});

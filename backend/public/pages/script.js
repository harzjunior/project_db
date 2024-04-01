// Function to fetch data from the GraphQL API
async function fetchData() {
  try {
    const response = await fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query Countries {
              countries {
                country_name
                createdAt
              }
              cities {
                city_name
                createdAt
              }
              addresses {
                postal_code
                street_address
                createdAt
              }
              comments {
                comment_text
                createdAt
                guest_email
                guest_name
              }
              users {
                createdAt
                email
                username
              }
              contacts {
                createdAt
                email
                message
                name
              }
            }
          `,
      }),
    });
    const responseData = await response.json();
    console.log("Response from server:", responseData); // Log the response data

    const { data } = responseData;

    // Display the fetched data on the page
    const dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = "";

    if (data) {
      // Display countries
      if (data.countries) {
        const countriesTable = createTable("Countries", data.countries, [
          "Country Name",
          "created At",
        ]);
        dataContainer.appendChild(countriesTable);
      }

      // Display cities
      if (data.cities) {
        const citiesTable = createTable("Cities", data.cities, [
          "City Name",
          "Created At",
        ]);
        dataContainer.appendChild(citiesTable);
      }

      // Display addresses
      if (data.addresses) {
        const addressesTable = createTable("Addresses", data.addresses, [
          "Postal Code",
          "Street Address",
          "Created At",
        ]);
        dataContainer.appendChild(addressesTable);
      }

      // Display comments
      if (data.comments) {
        const commentsTable = createTable("Comments", data.comments, [
          "Comment Text",
          "Created At",
          "Guest Email",
          "Guest Name",
        ]);
        dataContainer.appendChild(commentsTable);
      }

      // Display users
      if (data.users) {
        const usersTable = createTable("Users", data.users, [
          "Username",
          "Email",
          "Created At",
        ]);
        dataContainer.appendChild(usersTable);
      }

      // Display contacts
      if (data.contacts) {
        const contactsTable = createTable("Contacts", data.contacts, [
          "Name",
          "Email",
          "Message",
          "Created At",
        ]);
        dataContainer.appendChild(contactsTable);
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Helper function to create a table
function createTable(title, rows, headers) {
  const table = document.createElement("table");
  table.classList.add("table");

  // Add table title
  const caption = table.createCaption();
  caption.textContent = title;

  // Add table headers
  const headerRow = table.insertRow();
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  // Add table rows
  rows.forEach((rowData) => {
    const row = table.insertRow();
    headers.forEach((header) => {
      const cell = row.insertCell();
      if (header.toLowerCase() === "created at") {
        const createdAt = new Date(
          parseInt(rowData.createdAt)
        ).toLocaleString(); // Convert Unix timestamp to a readable date format
        cell.textContent = createdAt;
      } else {
        cell.textContent = rowData[header.toLowerCase().replace(/\s/g, "_")];
      }
    });
  });

  return table;
}

// Call the fetchData function when the page loads
window.addEventListener("load", fetchData);

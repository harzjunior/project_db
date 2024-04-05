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
            query Address {
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
    // console.log("Response from server:", responseData); // Log the response data

    const { data } = responseData;

    // Display the fetched data on the page
    if (data) {
      // Display countries
      if (data.countries) {
        populateTable("countries-tbody", data.countries, [
          "country_name",
          "createdAt",
        ]);
      }

      // Display cities
      if (data && data.cities) {
        populateTable("cities-tbody", data.cities, ["city_name", "createdAt"]);
      }

      // Display addresses
      if (data.addresses) {
        populateTable("addresses-tbody", data.addresses, [
          "postal_code",
          "street_address",
          "createdAt",
        ]);
      }

      // Display comments
      if (data.comments) {
        populateTable("comments-tbody", data.comments, [
          "comment_text",
          "createdAt",
          "guest_email",
          "guest_name",
        ]);
      }

      // Display users
      if (data.users) {
        populateTable("users-tbody", data.users, [
          "username",
          "email",
          "createdAt",
        ]);
      }

      // Display contacts
      if (data.contacts) {
        populateTable("contacts-tbody", data.contacts, [
          "name",
          "email",
          "message",
          "createdAt",
        ]);
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Helper function to populate table body
function populateTable(containerId, rows, keys) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear previous content

  rows.forEach((rowData) => {
    const row = document.createElement("tr");
    keys.forEach((key) => {
      const cell = document.createElement("td");
      if (key.toLowerCase() === "createdat") {
        const createdAt = new Date(parseInt(rowData[key])).toLocaleString(); // Convert Unix timestamp to a readable date format
        cell.textContent = createdAt;
      } else {
        cell.textContent = rowData[key];
      }
      row.appendChild(cell);
    });
    container.appendChild(row);
  });

  // Once the table is populated, remove the "hidden" class to display it
  container.classList.remove("hidden");
}

// Call the fetchData function when the page loads
window.addEventListener("load", fetchData);

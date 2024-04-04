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

// Function to fetch city data from the GraphQL API
async function fetchCityData() {
  try {
    const response = await fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
              query Address {
                cities {
                  city_name
                  createdAt
                }
              }
            `,
      }),
    });
    const responseData = await response.json();
    console.log("Response from server:", responseData); // Log the response data

    const { data } = responseData;

    // Display the fetched city data on the page
    if (data && data.cities) {
      populateTable("cities-tbody", data.cities, ["city_name", "createdAt"]);
    }
  } catch (error) {
    console.error("Error fetching city data:", error);
  }
}

// Call the fetchCityData function when the page loads
window.addEventListener("load", fetchCityData);

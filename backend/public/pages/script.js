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
        data.countries.forEach((country) => {
          const countryElement = document.createElement("div");
          countryElement.textContent = `Country: ${country.country_name}`;
          dataContainer.appendChild(countryElement);
        });
      }

      // Display cities
      if (data.cities) {
        data.cities.forEach((city) => {
          const cityElement = document.createElement("div");
          cityElement.textContent = `City: ${city.city_name}, Created At: ${city.createdAt}`;
          dataContainer.appendChild(cityElement);
        });
      }

      // Display addresses
      if (data.addresses) {
        data.addresses.forEach((address) => {
          const addressElement = document.createElement("div");
          addressElement.textContent = `Postal Code: ${address.postal_code}, Street Address: ${address.street_address}, Created At: ${address.createdAt}`;
          dataContainer.appendChild(addressElement);
        });
      }

      // Display comments
      if (data.comments) {
        data.comments.forEach((comment) => {
          const commentElement = document.createElement("div");
          commentElement.textContent = `Comment: ${comment.comment_text}, Created At: ${comment.createdAt}, Guest Email: ${comment.guest_email}, Guest Name: ${comment.guest_name}`;
          dataContainer.appendChild(commentElement);
        });
      }

      // Display users
      if (data.users) {
        data.users.forEach((user) => {
          const userElement = document.createElement("div");
          userElement.textContent = `User: ${user.username}, Email: ${user.email}, Created At: ${user.createdAt}`;
          dataContainer.appendChild(userElement);
        });
      }

      // Display contacts
      if (data.contacts) {
        data.contacts.forEach((contact) => {
          const contactElement = document.createElement("div");
          contactElement.textContent = `Contact: ${contact.name}, Email: ${contact.email}, Message: ${contact.message}, Created At: ${contact.createdAt}`;
          dataContainer.appendChild(contactElement);
        });
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the fetchData function when the page loads
window.addEventListener("load", fetchData);

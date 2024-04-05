// address.js

// Function to fetch address data from the server
async function fetchAddressData() {
  try {
    const addressResponse = await fetch("/api/address");
    let addressData = await addressResponse.json();

    // Flatten the structure of addressData
    addressData = addressData.map((entry) => ({
      ...entry,
      ...entry.city, // Spread the nested city object
    }));

    const cityResponse = await fetch("/api/city");
    const cityData = await cityResponse.json();

    const countryResponse = await fetch("/api/country");
    let countryData = await countryResponse.json();

    // Flatten the structure of countryData
    countryData = countryData.map((entry) => ({
      ...entry,
    }));

    // Populate the address table
    populateAddressTable(addressData, cityData, countryData);

    // Select a random country name
    const randomCountryIndex = Math.floor(Math.random() * countryData.length);
    const countryName = countryData[randomCountryIndex].country_name;

    // Set the random country name in local storage
    localStorage.setItem("countryName", countryName);

    // Call displayCountryName function to display the country name on the page
    displayCountryName();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to display the country name on the page
function displayCountryName() {
  // Retrieve country name from local storage
  const countryName = localStorage.getItem("countryName");

  // Update the content of the code element with the country name
  const countryDisplay = document.getElementById("countryDisplay");
  if (countryDisplay && countryName) {
    countryDisplay.textContent = countryName;
  }
}

// Helper function to generate sequential IDs starting from 1
function generateSequentialIds(data) {
  return data.map((_, index) => index + 1);
}

// Helper function to populate the address table
function populateAddressTable(addressData, cityData, countryData) {
  const tableBody = document.querySelector("#addressTable tbody");
  tableBody.innerHTML = ""; // Clear previous content

  // Generate sequential IDs for addresses
  const sequentialIds = generateSequentialIds(addressData);

  addressData.forEach((address, index) => {
    const city = cityData.find((city) => city._id === address.city);
    const country = countryData.find((country) => country._id === city.country);

    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${sequentialIds[index]}</td>
          <td>${address.street_address}</td>
          <td>${city ? city.city_name : ""}</td>
          <td>${address.postal_code}</td>
          <td>${country ? country.country_name : ""}</td>
        `;
    tableBody.appendChild(row);
  });
}

// Call fetchAddressData function when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", fetchAddressData);

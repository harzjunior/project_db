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

    populateAddressTable(addressData, cityData, countryData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Helper function to populate the address table
function populateAddressTable(addressData, cityData, countryData) {
  const tableBody = document.querySelector("#addressTable tbody");
  tableBody.innerHTML = ""; // Clear previous content

  addressData.forEach((address) => {
    const city = cityData.find((city) => city._id === address.city);
    const country = countryData.find((country) => country._id === city.country);

    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${address._id["$oid"]}</td>
            <td>${address.street_address}</td>
            <td>${city ? city.city_name : ""}</td>
            <td>${address.postal_code}</td>
            <td>${country ? country.country_name : ""}</td>
          `;
    tableBody.appendChild(row);
  });
}

// Call fetchAddressData function when the window loads
window.addEventListener("load", fetchAddressData);

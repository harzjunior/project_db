// Function to handle search
function handleSearch() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase(); // Get the search input value and convert to lowercase for case-insensitive search

  // Get all table rows
  const rows = document.querySelectorAll("tbody tr");

  // Loop through each row
  rows.forEach((row) => {
    // Get all cells in the row
    const cells = row.querySelectorAll("td");

    // Variable to check if any cell contains the search term
    let found = false;

    // Loop through each cell in the row
    cells.forEach((cell) => {
      // Check if the cell's text content contains the search term
      if (cell.textContent.toLowerCase().includes(searchInput)) {
        found = true;
      }
    });

    // If any cell contains the search term, display the row, otherwise hide it
    if (found) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Add event listener for input event on the search input field
document.getElementById("searchInput").addEventListener("input", handleSearch);

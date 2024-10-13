let heroesData = []; // To store all heroes data globally

// Function to load data into the table
const loadData = (heroes, limit) => {
  const tableBody = document.querySelector("#heroesTable tbody");
  tableBody.innerHTML = ""; // Clear previous data

  for (let i = 0; i < limit && i < heroes.length; i++) {
    let tr = document.createElement("tr");

    // Hero Image (Icon)
    let iconCell = document.createElement("td");
    let img = document.createElement("img");
    img.src = heroes[i].images.xs;
    img.alt = heroes[i].name;
    iconCell.appendChild(img);
    tr.appendChild(iconCell);

    // Hero Name
    let nameCell = document.createElement("td");
    nameCell.textContent = heroes[i].name;
    tr.appendChild(nameCell);

    // Full Name
    let fullNameCell = document.createElement("td");
    fullNameCell.textContent = heroes[i].biography.fullName || "N/A";
    tr.appendChild(fullNameCell);

    // Powerstats
    let powerstatsCell = document.createElement("td");
    const powerstats = heroes[i].powerstats;
    powerstatsCell.textContent = `Intelligence: ${powerstats.intelligence}, Strength: ${powerstats.strength}, Speed: ${powerstats.speed}, Durability: ${powerstats.durability}, Power: ${powerstats.power}, Combat: ${powerstats.combat}`;
    tr.appendChild(powerstatsCell);

    // Race
    let raceCell = document.createElement("td");
    raceCell.textContent = heroes[i].appearance.race || "N/A";
    tr.appendChild(raceCell);

    // Gender
    let genderCell = document.createElement("td");
    genderCell.textContent = heroes[i].appearance.gender || "N/A";
    tr.appendChild(genderCell);

    // Height
    let heightCell = document.createElement("td");
    heightCell.textContent = heroes[i].appearance.height[1] || "N/A";
    tr.appendChild(heightCell);

    // Weight
    let weightCell = document.createElement("td");
    weightCell.textContent = heroes[i].appearance.weight[1] || "N/A";
    tr.appendChild(weightCell);

    // Place of Birth
    let placeOfBirthCell = document.createElement("td");
    placeOfBirthCell.textContent = heroes[i].biography.placeOfBirth || "Unknown";
    tr.appendChild(placeOfBirthCell);

    // Alignment (good/bad/neutral)
    let alignmentCell = document.createElement("td");
    alignmentCell.textContent = heroes[i].biography.alignment || "Unknown";
    tr.appendChild(alignmentCell);

    // Append the row to the table body
    tableBody.appendChild(tr);
  }
};

// Fetch the data and store it globally
export function getdata() {
  fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
    .then((response) => response.json()) // Parse the response from JSON
    .then((heroes) => {
      heroesData = heroes; // Store the data globally
      updateData(); // Load the initial data with default limit
    });
}

// Function to update the table based on the selected limit
export function updateData() {
  const selectElement = document.getElementById("limitSelect");
  const selectedLimit = parseInt(selectElement.value, 10); // Get the selected limit from the dropdown
  loadData(heroesData, selectedLimit); // Load data with the selected limit
}

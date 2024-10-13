let start = 0
let end = 20
var limitselect = 20
var globheroes = []
var currentheros = []

document.getElementById("Next").addEventListener("click", function () {
  start += limitselect
  end += limitselect
  loadData(currentheros)
})

document.getElementById("Prev").addEventListener("click", function () {
  if (start > 0) {
    start -= limitselect
  }
  if (end > limitselect) {
    end -= limitselect
  }
  loadData(currentheros)
})

document.getElementById("limitSelect").addEventListener("change", function () {
  const selectedLimit = this.value;
  if (selectedLimit == "all results") {
    limitselect = -1
    loadData(currentheros)
  } else {
    start = 0
    end = Number(selectedLimit)
    limitselect = Number(selectedLimit)
    loadData(currentheros)
  }
})

document.getElementById("SBar").addEventListener("input", function () {
  currentheros = []
  let query = document.getElementById("SBar").value.toLowerCase();

  for (let i = 0; i < globheroes.length; i++) {
    let Name = globheroes[i].name.toLowerCase()
    if (Name.includes(query)) {
      currentheros.push(globheroes[i])
    }
  }
  start = 0
  end = limitselect
  loadData(currentheros)
})

const loadData = (heroes) => {


  if (heroes.length == 0) {
    return
  }
  if (limitselect == -1) {
    start = 0
    end = heroes.length
    limitselect = 0
  }
  const tableBody = document.querySelector("#heroesTable tbody");
  tableBody.innerHTML = ""; // Clear previous data

  if (end >= heroes.length && start >= heroes.length) {
    start = 0
    end = limitselect
  }

  for (let i = start; i < end && i < heroes.length; i++) {
    let tr = document.createElement("tr");

    // Hero Image (Icon)
    let iconCell = document.createElement("td");
    let img = document.createElement("img");
    if (heroes[i].images != '') {
      img.src = heroes[i].images.xs;
      img.alt = heroes[i].name;
    }

    iconCell.appendChild(img);
    tr.appendChild(iconCell);

    // Hero Name
    let nameCell = document.createElement("td");
    nameCell.textContent = heroes[i].name;
    tr.appendChild(nameCell);

    // Full Name
    let fullNameCell = document.createElement("td");
    fullNameCell.textContent = heroes[i].biography.fullName || "";
    tr.appendChild(fullNameCell);

    // Powerstats
    let powerstatsCell = document.createElement("td");
    const powerstats = heroes[i].powerstats;
    powerstatsCell.textContent = `Intelligence: ${powerstats.intelligence}, Strength: ${powerstats.strength}, Speed: ${powerstats.speed}, Durability: ${powerstats.durability}, Power: ${powerstats.power}, Combat: ${powerstats.combat}`;
    tr.appendChild(powerstatsCell);

    // Race
    let raceCell = document.createElement("td");
    raceCell.textContent = heroes[i].appearance.race || "";
    tr.appendChild(raceCell);

    // Gender
    let genderCell = document.createElement("td");
    genderCell.textContent = heroes[i].appearance.gender || "";
    tr.appendChild(genderCell);

    // Height
    let heightCell = document.createElement("td");
    heightCell.textContent = heroes[i].appearance.height[1] || "";
    tr.appendChild(heightCell);

    // Weight
    let weightCell = document.createElement("td");
    weightCell.textContent = heroes[i].appearance.weight[1] || "";
    tr.appendChild(weightCell);

    // Place of Birth
    let placeOfBirthCell = document.createElement("td");
    placeOfBirthCell.textContent = heroes[i].biography.placeOfBirth || "";
    tr.appendChild(placeOfBirthCell);

    // Alignment (good/bad/neutral)
    let alignmentCell = document.createElement("td");
    alignmentCell.textContent = heroes[i].biography.alignment || "";
    tr.appendChild(alignmentCell);

    // Append the row to the table body
    tableBody.appendChild(tr);
  }
};

fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
  .then((response) => response.json()) // Parse the response from JSON
  .then((h) => {
    globheroes = h
    currentheros = h
    loadData(h); // Load the initial data with a default limit of 10
  })


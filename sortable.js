
let start = 0
let end = 20
var limitselect = 20
var globheroes = []
var currentheros = []
var isAscending = true
document.getElementById("Height").addEventListener("click", function () {
  for (let i = 0; i < currentheros.length; i++) {
    for (let j = i + 1; j < currentheros.length; j++) {
      let a = 0
      if (currentheros[i].appearance.height.length == 2) {
        a = getNumber(currentheros[i].appearance.height[1])
      }

      let b = 0
      if (currentheros[j].appearance.height.length == 2) {
        b = getNumber(currentheros[j].appearance.height[1])
      }
      if (a==0 && b!=0){
        let a = currentheros[i]
        currentheros[i] = currentheros[j]
        currentheros[j] = a
      }else if (a <= b && b!=0 && isAscending) {
        let c = currentheros[i]
        currentheros[i] = currentheros[j]
        currentheros[j] = c
      } else if (a >= b && b!=0 && !isAscending) {
        let c = currentheros[i]
        currentheros[i] = currentheros[j]
        currentheros[j] = c
      }
    }
  }
  if (isAscending) {
    isAscending = false
  } else {
    isAscending = true
  }
  loadData(currentheros)
})
document.getElementById("Weight").addEventListener("click", function () {
  for (let i = 0; i < currentheros.length; i++) {
    for (let j = i + 1; j < currentheros.length; j++) {
      let a = 0
      if (currentheros[i].appearance.weight.length == 2) {
        a = getNumber(currentheros[i].appearance.weight[0])
      }

      let b = 0
      if (currentheros[j].appearance.weight.length == 2) {
        b = getNumber(currentheros[j].appearance.weight[0])
      }
      if (a==0 && b!=0){
        let a = currentheros[i]
        currentheros[i] = currentheros[j]
        currentheros[j] = a
      }else if ((a > b && b!=0) && isAscending) {
        let a = currentheros[i]
        currentheros[i] = currentheros[j]
        currentheros[j] = a
      } else if ((a < b && b!=0 ) && !isAscending) {
        let c = currentheros[i]
        currentheros[i] = currentheros[j]
        currentheros[j] = c
      }
    }
  }
  if (isAscending) {
    isAscending = false
  } else {
    isAscending = true
  }

  loadData(currentheros)
})
function getNumber(s) {
  let num = parseFloat(s);

  if (s.includes("cm")) {
    num /= 100
  }
  if (isNaN(num)) {
    num = 0
  }
  return num
}
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
    .then((h) => {
      globheroes = h
      currentheros = h
      loadData(h); // Load the initial data with a default limit of 10
    })
}

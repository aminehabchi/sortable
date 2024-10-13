var isAscending = true

document.getElementById("Powerstats").addEventListener("click", function () {
  for (let i = 0; i < currentheros.length; i++) {
    for (let j = i + 1; j < currentheros.length; j++) {
      let a = parseFloat(currentheros[i].powerstats.intelligence)+ parseFloat(currentheros[i].powerstats.strength)+parseFloat(currentheros[i].powerstats.speed)+parseFloat(currentheros[i].powerstats.durability)+parseFloat(currentheros[i].powerstats.power)+parseFloat(currentheros[i].powerstats.combat)
      let b = parseFloat(currentheros[j].powerstats.intelligence)+ parseFloat(currentheros[j].powerstats.strength)+parseFloat(currentheros[j].powerstats.speed)+parseFloat(currentheros[j].powerstats.durability)+parseFloat(currentheros[j].powerstats.power)+parseFloat(currentheros[j].powerstats.combat)
      if (a == 0 && b != 0) {
        swap(i, j)
      } else if (a < b && b != 0 && isAscending) {
        swap(i, j)
      } else if (a > b && b != 0 && !isAscending) {
        swap(i, j)
      }
    }
  }
  isAscending = !isAscending
  loadData(currentheros)
})

document.getElementById("Alignment").addEventListener("click", function () {
  for (let i = 0; i < currentheros.length; i++) {
    for (let j = i + 1; j < currentheros.length; j++) {
      let a = currentheros[i].biography.alignment
      let b = currentheros[j].biography.alignment
      if (a == "-" && b != "-") {
        swap(i, j)
      } else if (a < b && b != "-" && isAscending) {
        swap(i, j)
      } else if (a > b && b != "-" && !isAscending) {
        swap(i, j)
      }
    }
  }
  isAscending = !isAscending
  loadData(currentheros)
})

document.getElementById("Place_of_Birth").addEventListener("click", function () {
  for (let i = 0; i < currentheros.length; i++) {
    for (let j = i + 1; j < currentheros.length; j++) {
      let a = currentheros[i].biography.placeOfBirth
      let b = currentheros[j].biography.placeOfBirth
      if (a == "-" && b != "-") {
        swap(i, j)
      } else if (a < b && b != "-" && isAscending) {
        swap(i, j)
      } else if (a > b && b != "-" && !isAscending) {
        swap(i, j)
      }
    }
  }
  isAscending = !isAscending
  loadData(currentheros)
})

document.getElementById("Race").addEventListener("click", function () {
  for (let i = 0; i < currentheros.length; i++) {
    for (let j = i + 1; j < currentheros.length; j++) {
      let a = currentheros[i].appearance.race
      let b = currentheros[j].appearance.race

      if (a == null && b != null) {
        swap(i, j)
      } else if (a < b && b != null && isAscending) {
        swap(i, j)
      } else if (a > b && b != null && !isAscending) {
        swap(i, j)
      }
    }
  }
  isAscending = !isAscending
  loadData(currentheros)
})

document.getElementById("Gender").addEventListener("click", function () {
  for (let i = 0; i < currentheros.length; i++) {
    for (let j = i + 1; j < currentheros.length; j++) {
      let a = currentheros[i].appearance.gender
      let b = currentheros[j].appearance.gender
      if (a.length < 4) {
        a = ""
      }
      if (b.length < 4) {
        b = ""
      }
      if (a == "" && b != "") {
        swap(i, j)
      } else if (a < b && b != "" && isAscending) {
        swap(i, j)
      } else if (a > b && b != "" && !isAscending) {
        swap(i, j)
      }
    }
  }
  isAscending = !isAscending
  loadData(currentheros)
})

document.getElementById("Name").addEventListener("click", function () {
  for (let i = 0; i < currentheros.length; i++) {
    for (let j = i + 1; j < currentheros.length; j++) {
      let a = currentheros[i].name
      let b = currentheros[j].name
      if (a < b && isAscending) {
        swap(i, j)
      } else if (a > b && !isAscending) {
        swap(i, j)
      }
    }
  }
  isAscending = !isAscending
  loadData(currentheros)
})

document.getElementById("Full_Name").addEventListener("click", function () {
  for (let i = 0; i < currentheros.length; i++) {
    for (let j = i + 1; j < currentheros.length; j++) {
      let a = currentheros[i].biography.fullName
      let b = currentheros[j].biography.fullName
      if (a == "" && b != "") {
        swap(i, j)
      } else if (a < b && b != "" && isAscending) {
        swap(i, j)
      } else if (a > b && b != "" && !isAscending) {
        swap(i, j)
      }
    }
  }
  isAscending = !isAscending
  loadData(currentheros)
})

function swap(i, j) {
  let c = currentheros[i]
  currentheros[i] = currentheros[j]
  currentheros[j] = c
}

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
      if (a == 0 && b != 0) {
        swap(i, j)
      } else if (a <= b && b != 0 && isAscending) {
        swap(i, j)
      } else if (a >= b && b != 0 && !isAscending) {
        swap(i, j)
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
      if (a == 0 && b != 0) {
        swap(i, j)
      } else if ((a > b && b != 0) && isAscending) {
        swap(i, j)
      } else if ((a < b && b != 0) && !isAscending) {
        swap(i, j)
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

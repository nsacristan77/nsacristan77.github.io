const houseData = [
  {
    "name": "Manors",
    "model": "Louisa",
    "type": "Single Attached",
    "price": "3,309,211.00",
    "lot": "96 sqm.",
    "floor": "62 sqm.",
    "bed": "3",
    "toilet": "2",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/manors1.jpg"
  },
  {
    "name": "Accropolis",
    "model": "Sofia",
    "type": "Single Detached",
    "price": "5,143,978.00",
    "lot": "125 sqm.",
    "floor": "110 sqm",
    "bed": "4",
    "toilet": "2",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/sofia.jpeg"
  },
  {
    "name": "Amara Villas",
    "model": "Alexandrea",
    "type": "Single Attached",
    'price': "2,914,000.00",
    "lot": "84 sqm.",
    "floor": "60 sqm.",
    "bed": "2",
    "toilet": "2",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/amara.jpg"
  },
  {
    "name": "Via Verde",
    "model": "Tierra",
    "type": "Duplex",
    "price": "2,224,897.00",
    "lot": "75 sqm.",
    "floor": "39 sqm",
    "bed": "2",
    "toilet": "1",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/viaverde.jpg"
  },
  {
    "name": "West Governor Heights",
    "model": "Harriet",
    "type": "Single Attached",
    "price": "2,020,000.00",
    "lot": "75 sqm.",
    "floor": "65.46 sqm.",
    "bed": "2",
    "toilet": "1",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/westgov1.jpg"
  },
  {
    "name": "Las Brisas",
    "model": "Zelia",
    "type": "Single Attached",
    "price": "3,483,320.00",
    "lot": "72 sqm.",
    "floor": "112.5 sqm.",
    "bed": "2",
    "toilet": "2",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/lasbrisas.jpg"
  }
];

document.getElementById("houseTemplate").innerHTML = `

${houseData.map(function(house) {
  return `
  <div class="house-container">
  <img class="house-photo" src="${house.photo}">
  <h2 class="house-name">${house.name}(${house.type})</h2>
  </div>
  `
}).join('')}

`

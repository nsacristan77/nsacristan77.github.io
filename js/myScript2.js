const houseData = [
  {
    "name": "Manors",
    "model": "Louisa",
    "type": "Single Attached",
    "dateConstructed": "2020",
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
    "dateConstructed": "2020",
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
    "dateConstructed": "2018",
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
    "dateConstructed": "2018",
    "price": "2,224,897.00",
    "lot": "75 sqm.",
    "floor": "39 sqm",
    "bed": "2",
    "toilet": "1",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/imperial.jpg"
  },
  {
    "name": "West Gov. Heights",
    "model": "Harriet",
    "type": "Single Attached",
    "dateConstructed": "2018",
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
    "dateConstructed": "2018",
    "price": "3,483,320.00",
    "lot": "72 sqm.",
    "floor": "112.5 sqm.",
    "bed": "2",
    "toilet": "2",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/lasbrisas.jpg"
  },
  {
    "name": "Brookstone Park",
    "model": "Zelia",
    "type": "Single Attached",
    "dateConstructed": "2018",
    "price": "3,483,320.00",
    "lot": "72 sqm.",
    "floor": "112.5 sqm.",
    "bed": "2",
    "toilet": "2",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/brookstonepark.jpg"
  }
];

function status(dateConstructed) {
  let calculatedStatus = new Date().getFullYear() - dateConstructed;
  if (calculatedStatus == 1) {
    return 'New'
  } else if (calculatedStatus == 0) {
    return 'Pre-selling'
  } else {
    return 'New'
  }
}

function houseApp(house) {
  return `
  <div class="houses">
  <img class="house-photo" src="${house.photo}">
  <div class="text-container">
  <h2 class="house-name">${house.name}<span class="type">(Model: ${house.model})</span></h2>
  <p><strong>Price starts: ${house.price}</strong></p>
  <p><strong>Status:${status(house.dateConstructed)}</strong></p>
  <p>Lot area: ${house.lot}<span><i class="fa fa-bed"> ${house.bed}</i></span></p>
  <p>Floor area: ${house.floor}<span><i class="fa fa-shower"> ${house.bed}</i></span></p>
  </div>
  </div>
  `
}

document.getElementById("houseTemplate").innerHTML = `
  ${houseData.map(houseApp).join('')}
`

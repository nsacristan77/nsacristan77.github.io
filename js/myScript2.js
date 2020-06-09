const houseData = [
  {
    "name": "Manors",
    "model": "Louisa",
    "type": "Single Attached",
    "status": "Pre-selling",
    "price": "3,309,211.00",
    "lot": "96",
    "floor": "62",
    "bed": "3",
    "toilet": "2",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/manors1.jpg"
  },
  {
    "name": "Accropolis",
    "model": "Sofia",
    "type": "Single Detached",
    "status": "Pre-selling",
    "price": "5,143,978.00",
    "lot": "125",
    "floor": "110",
    "bed": "4",
    "toilet": "2",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/sofia.jpeg"
  },
  {
    "name": "Amara Villas",
    "model": "Alexandrea",
    "type": "Single Attached",
    "status": "RFO",
    'price': "2,914,000.00",
    "lot": "84",
    "floor": "60",
    "bed": "2",
    "toilet": "2",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/amara.jpg"
  },
  {
    "name": "Via Verde",
    "model": "Tierra",
    "type": "Duplex",
    "status": "Pre-selling",
    "price": "2,224,897.00",
    "lot": "75",
    "floor": "39",
    "bed": "2",
    "toilet": "1",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/imperial.jpg"
  },
  {
    "name": "West Gov. Heights",
    "model": "Harriet",
    "type": "Single Attached",
    "status": "Pre-selling",
    "price": "2,020,000.00",
    "lot": "75",
    "floor": "65.46",
    "bed": "2",
    "toilet": "1",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/westgov1.jpg"
  },
  {
    "name": "Las Brisas",
    "model": "Zelia",
    "type": "Single Attached",
    "status": "Pre-selling",
    "price": "3,483,320.00",
    "lot": "72",
    "floor": "112.5",
    "bed": "2",
    "toilet": "2",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/lasbrisas.jpg"
  },
  {
    "name": "Brookstone Park",
    "model": "Zelia",
    "type": "Single Attached",
    "status": "Pre-selling",
    "price": "3,483,320.00",
    "lot": "72",
    "floor": "112.5",
    "bed": "2",
    "toilet": "2",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/brookstonepark.jpg"
  },
  {
    "name": "West Beverly Hills",
    "model": "Nathalie",
    "type": "Single Attached",
    "status": "New",
    "price": "5,015,344.63",
    "lot": "140",
    "floor": "123.80",
    "bed": "3",
    "toilet": "2",
    "carport": "1",
    "photo": "https://nsacristan77.github.io/images/nathalie.jpg"
  }
];

function houseApp(house) {
  return `

  <div class="houses">
  <img class="house-photo" src="${house.photo}">
  <h2 class="house-name">${house.name}<span class="type">(${house.status})</span></h2>
  <h4>Model: ${house.model}</h4>
  <p><strong>Price starts: ${house.price}</strong></p>
  <div class="text-container">
  <div class="text1">
  <p>Lot size<span class="sqm">(m<sup>2</sup>)</span>: ${house.lot}</p>
  <p>Floor area<span class="sqm">(m<sup>2</sup>)</span>: ${house.floor}</p>
  </div>
  <div class="house-icon">
  <div>
  <p><i class="fa fa-bed"></i>Bedrooms:</p>
  <p><i class="fa fa-shower"></i>Toilet & Bath:</p>
  </div>
  <div>
  <p>${house.bed}</p>
  <p>${house.toilet}</p>
  </div>
  </div>
  </div>
  </div>

  `
}

document.getElementById("houseTemplate").innerHTML = `
  ${houseData.map(houseApp).join('')}

`

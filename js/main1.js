var pageCounter = 1;
var houseContainer = document.getElementById("house-info");
var btn = document.getElementById("btn");

var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://nsacristan77.github.io/jason-folder/house-1.json');
  myRequest.onload = function() {
    var houseData = JSON.parse(myRequest.responseText);
    renderHTML(houseData);
  };
  myRequest.send();
  pageCounter++;
});

function renderHTML(data) {
  var htmlString = "";

  for (i =0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
  }

  houseContainer.insertAdjacentHTML('beforeend', htmlString)
}

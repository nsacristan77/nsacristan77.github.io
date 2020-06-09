var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://nsacristan77.github.io/jason-folder/house-1.json');
  myRequest.onload = function() {
    var houseData = JSON.parse(myRequest.responseText);
    renderHTML();
  };
  myRequest.send();
});

function renderHTML() {
  
}

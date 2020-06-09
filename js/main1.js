var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://nsacristan77.github.io');
myRequest.onload = function() {
  var houseData = JSON.parse(myRequest.responseText);

};
myRequest.send();

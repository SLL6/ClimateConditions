var KEY = "35ec5bf920b736305714f59eed2a6f0a";

console.log(httpGet());

function httpGet()
{
    var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.wunderground.com/api/e4f143fbdf05222d/conditions/q/CA/San_Francisco.json", true);
//xhr.setRequestHeader("Access-Control-Allow-Origin", "localhost:5000");
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      console.log("Temperature(K): " + response.main.temp);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
return xhr.responseText;
}
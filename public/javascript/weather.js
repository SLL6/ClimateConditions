var KEY = "e4f143fbdf05222d";

console.log(httpGet());

function httpGet()
{
    var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.wunderground.com/api/e4f143fbdf05222d/conditions/q/CA/San_Diego.json", true);
//xhr.setRequestHeader("Access-Control-Allow-Origin", "localhost:5000");
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      //document.getElementById("candy").innerHTML = xhr.responseText;
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
var KEY = "35ec5bf920b736305714f59eed2a6f0a";

console.log(httpGet());

function httpGet()
{
    var xhr = new XMLHttpRequest();
xhr.open("GET", "http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=" + KEY, true);
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
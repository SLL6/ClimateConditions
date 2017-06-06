var data = 
console.log(httpGet());

function httpGet()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b1b15e88fa797225412429c1c50c122a1", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
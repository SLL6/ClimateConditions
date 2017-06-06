var data = 
console.log(httpGet());

function httpGet()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b1b15e88fa797225412429c1c50c122a1", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
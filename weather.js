const weatherContainer = document.querySelector(".js-weather");

const API_KEY = "b718eb65ee0d88df852232390730f609";
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weatherContainer.innerText = `Temp : ${temp}℃ place : ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log('cant access geo');
}

function askForCoords() { 
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }

}

function init(){
    loadCoords();
}

init();
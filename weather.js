const API_KEY = "b718eb65ee0d88df852232390730f609";
const COORDS = 'coords';

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
        //getWeather
    }

}

function init(){
    loadCoords();
}

init();
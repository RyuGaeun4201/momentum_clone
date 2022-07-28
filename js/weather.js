const API_KEY = "8a50fb88531f6edcb8703106d30a4c45";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const place = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            place.innerText = data.name;
            weather.innerText = `${data.weather[0].main}, (${data.main.temp}deg)`;
    })
}

function onGeoError() {

}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
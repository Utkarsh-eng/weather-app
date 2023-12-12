const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weatherimg = document.querySelector('.Weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
async function checkWeather(city) {
    const api_key = "22b4b6b2b90479c3da7d4c58437bc022";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weathering_data = await fetch(url).then(response => response.json());

    if (weathering_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");

        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weathering_data.main.temp - 273)}°C`;
    description.innerHTML = `${weathering_data.weather[0].description}`;

    humidity.innerHTML = `${weathering_data.main.humidity}%`;
    wind_speed.innerHTML = `${weathering_data.wind.speed}Km/h`;
    pressure.innerHTML = `${weathering_data.main.pressure}atm`;
    visibility.innerHTML = `${weathering_data.visibility}visible`;

    switch (weathering_data.weather[0].main) {
        case 'Clouds':
            weatherimg.src = "/img/cloud.png";
            break;
        case 'Clear':
            weatherimg.src = "/img/clear.png";
            break;
        case 'Rain':
            weatherimg.src = "/img/rain.png";
            break;
        case 'Mist':
            weatherimg.src = "/img/mist.png";
            break;
        case 'Snow':
            weatherimg.src = "/img/snow.png";
            break;
    }

    console.log(weathering_data);
}
searchbtn.addEventListener('click', () => {
    checkWeather(inputbox.value);
});
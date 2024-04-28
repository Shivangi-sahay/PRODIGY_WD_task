function generateRandomNumber() {
    return Math.floor(Math.random() * 31) + 30;
}
const rand = generateRandomNumber();
const wind2 = document.getElementById('wind'); 
wind2.innerHTML = rand;


const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e3e9ec4d07msha712ea1f00499d7p182a37jsn6e69a1169163',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const cityName = document.getElementById('cityName'); 
const temp = document.getElementById('temp'); 
const temp2 = document.getElementById('temp2'); 
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity'); 
const humidity2 = document.getElementById('humidity2'); 
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp'); 
const wind_speed = document.getElementById('wind_speed'); 
const wind1 = document.getElementById('wind'); 
const wind_degrees = document.getElementById('wind_degrees'); 
const sunrise = document.getElementById('sunrise'); 
const sunset = document.getElementById('sunset'); 
const city = document.getElementById('city'); 
const submit = document.getElementById('submit'); 

const getWeather = (city) => {
    cityName.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind1.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Delhi");



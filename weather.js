const searchBar = document.querySelector('.search');
const noTemp = document.querySelector('.noTemp');
const tempVal = document.querySelector('.tempVal');
const highLow = document.querySelector('.highLow');
const city = document.querySelector('.city');
const weathParam = document.querySelector('.weather');
const error = document.querySelector('.error');


submitEvent = (function () {
    searchBar.addEventListener('keypress', enter)
})();

function enter(e) {
    if (e.keyCode == 13) {
        fetchWeather();
    }
}

function fetchWeather() {
    let apiKey = '0051bc9e33a470267757d07b63bf6e95';
    let city = searchBar.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => changeDisplay(data))
        .catch(function () {
            error.innerText = 'Please enter a valid city name'
        });
}

function changeDisplay(data) {
    searchBar.value = '';
    tempVal.innerText = ' ' + Math.round((data.main.temp - 273.15) * 9 / 5 + 32) + '°';
    if (tempVal.innerText !== '') {
        noTemp.className = 'temp';
    }
    highLow.innerText = Math.round((data.main.temp_min - 273.15) * 9 / 5 + 32) + '°/' + Math.round((data.main.temp_max - 273.15) * 9 / 5 + 32) + '°';
    city.innerText = data.name + ', ' + data.sys.country;
    weathParam.innerText = data.weather[0].main;

    if (city.innerText !== '') {
        error.innerText = '';
    }
}
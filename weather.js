document.getElementById("search").addEventListener("keypress", inputWeather);

function inputWeather(e) {
    if (e.keyCode === 13) {
        console.log(test)
    }
}

test = "Hello"

api = {
    key: "0051bc9e33a470267757d07b63bf6e95",
    url: "http://api.openweathermap.org/data/2.5/"
}
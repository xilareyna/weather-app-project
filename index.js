function formatDate(today) {
  let now = new Date();

  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let min = now.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let h3 = document.querySelector("h3");
  h3.innerHTML = `${day} ${hour}:${min}`;

  return `${day} ${hour}:${min}`;
}
formatDate();

let search = document.querySelector("#searchCity");

function updateWeather(data) {
  let cityName = data.data.name;
  console.log(data);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityName}`;

  let currentTemp = Math.round(data.data.main.temp);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${currentTemp}°F`;

  let currentHumidity = Math.round(data.data.main.humidity);
  let humid = document.querySelector("#humid");
  humid.innerHTML = `Humidity: ${currentHumidity}%`;

  let currentClouds = data.data.weather[0].description;
  let clouds = document.querySelector("#cloud");
  clouds.innerHTML = `Cloudiness: ${currentClouds}`;

  let currentWind = Math.round(data.data.wind.speed);
  let windy = document.querySelector("#wind");
  windy.innerHTML = `Wind Speed: ${currentWind} mph`;
}

function askCity(event) {
  event.preventDefault();
  let apiKey = "3005cf683488995bd7ae8c9a476e7cb8";
  let cityInput = document.querySelector("#searchbar").value;
  console.log(cityInput);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&&units=imperial`;
  console.log(apiUrl);
  axios.get(apiUrl).then(updateWeather);
}

search.addEventListener("submit", askCity);

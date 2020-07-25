//WEEK 4

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()]; //Sunday
let date = now.getDate(); //28
let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let hours = now.getHours();
let minutes = now.getMinutes();
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
h1.innerHTML = `${day} ${date}th ${month}`;
h2.innerHTML = `${hours}:${minutes}`;

//WEEK 5

function showWeather(response) {
  let cityElement = document.querySelector("#id-city-detail");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function showCity(city) {
  let apiKey = "b46268490d136abc34f81fe2c0e69cff";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  showCity(city);
}

let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", handleSubmit);

showCity("New York");

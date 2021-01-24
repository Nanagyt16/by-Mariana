function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  function  displayWeatherConditions(response){
    document.querySelector("#city").innerHTML= response.data.name ;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#humidity").innerHTML = Math.round(response.data.main.humidity);
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed)
    let iconElement=document.querySelector("#icon");
    iconElement.setAttribute( "src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}10d@2x.png`);
  }
    
  function searchCity(city){
    
    let apiKey = "9ea4abf30ce31c32866690108912edb4"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherConditions);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
   
  }
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleSubmit);
  
  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 35.6;
  }
  
  function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML =2;
  }
  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", convertToFahrenheit);
  
  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", convertToCelsius);
  
  function searchLocation(position){
    let apiKey = "9ea4abf30ce31c32866690108912edb4";
    let apiUrl = `https://api.oenweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longtitude}&appid=${apikey}&units=metric `;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function getCurrentLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  let currentLocationButton = document.querySelector("#current-location-button");
  currentLocationButton.addEventListener("click",getCurrentLocation);
  searchCity("Lviv");
  
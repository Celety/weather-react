import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setSearch(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function changeCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=3c949ba49d38be2487ee278e0d2d4059&units=metric`;
    axios.get(url).then(showWeather);
  }

  let searchForCity = (
    <div className="SearchEngine">
      <h1>Weather Search Engine</h1>
      <form onSubmit={changeCity}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (search) {
    return (
      <div>
        {searchForCity}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {Math.round(weather.humidity)}%</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
          <li>
            <img src={weather.icon} alt="weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return searchForCity;
  }
}

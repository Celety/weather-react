import React, { useState } from "react";
import axios from "axios";

import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weather, setWeather] = useState({ search: false });
  const [city, setCity] = useState(props.defaultCity);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setWeather({
      search: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }

  function changeCity(event) {
    event.preventDefault();
    let apiKey = `aed4d88797163123fetdeb5b4oa0a933`;
    let unit = `metric`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(url).then(showWeather);
  }

  let searchForCity = (
    <div className="searchForCity">
      <form onSubmit={changeCity}>
        <div className="input-group mb-3">
          <input
            type="search"
            placeholder="Search for city..."
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            autoComplete="off"
            onChange={updateCity}
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            🔎
          </button>
        </div>
      </form>
    </div>
  );

  let defaultInfo = (
    <div className="defaultInfo">
      <div className="city" id="current-city">
        {weather.city}
      </div>
      <div className="day" id="current-day">
        Sunday 30, April
      </div>
      <div className="hour" id="current-hour">
        01:07
      </div>
      <div className="weather">
        <span id="temperature">{Math.round(weather.temperature)}</span>
        <span id="unit">°C</span>
        <div className="weather-icon">
          <img
            src={weather.icon}
            alt="weather icon"
            id="weather-icon"
            width="130"
          />
        </div>
        <div className="weather-conditions">
          <div id="weather-description">{weather.description}</div>
          <div id="wind-speed">Wind speed: {Math.round(weather.wind)} Km/h</div>
          <div id="humidity">Humidity: {Math.round(weather.humidity)}%</div>
        </div>
      </div>
    </div>
  );

  if (weather.search) {
    return (
      <div className="SearchEngine">
        {searchForCity}
        {defaultInfo}
      </div>
    );
  } else {
    let apiKey = `aed4d88797163123fetdeb5b4oa0a933`;
    let unit = `metric`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${unit}`;
    axios.get(url).then(showWeather);
    return <div>Loading...</div>;
  }
}

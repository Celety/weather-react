import React, { useState } from "react";
import axios from "axios";

import DefaultInfo from "./DefaultInfo";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
    console.log(city);
  }

  function showWeather(response) {
    setSearch(true);
    setWeather({
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
    <div className="SearchEngine">
      <form onSubmit={changeCity}>
        <div class="input-group mb-3">
          <input
            type="search"
            placeholder="Type a city"
            class="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            autocomplete="off"
            onChange={updateCity}
          />
          <button
            class="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            🔎
          </button>
        </div>
      </form>
    </div>
  );

  if (search) {
    return (
      <div>
        {searchForCity}
        <DefaultInfo />
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
    return (
      <div>
        {searchForCity}
        <DefaultInfo />
      </div>
    );
  }
}

import React, { useState } from "react";
import axios from "axios";

import "./SearchEngine.css";

import WeatherInfo from "./WeatherInfo";

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
      date: new Date(response.data.time * 1000),
    });
  }

  function searchForUserCity() {
    let apiKey = `aed4d88797163123fetdeb5b4oa0a933`;
    let unit = `metric`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(url).then(showWeather);
  }

  function changeCity(event) {
    event.preventDefault();
    searchForUserCity();
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
  if (weather.search) {
    return (
      <div className="SearchEngine">
        {searchForCity}
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    searchForUserCity();
    return <div>Loading...</div>;
  }
}

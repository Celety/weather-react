import React, { useState } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast col-4">
        <WeatherForecastDay data={forecast.daily[0]} />
      </div>
    );
  } else {
    let city = props.city;
    let apiKey = `aed4d88797163123fetdeb5b4oa0a933`;
    let apiUnit = `metric`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${apiUnit}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

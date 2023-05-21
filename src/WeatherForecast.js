import React, { useState, useEffect } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast col-4">
        {forecast.daily.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <ul className="list-group" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </ul>
            );
          }
        })}
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

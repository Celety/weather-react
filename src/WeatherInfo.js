import React from "react";

import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="dWeatherInfo">
      <div className="city" id="current-city">
        {props.data.city}
      </div>
      <div className="currentDate">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="weather">
        <span id="temperature">{Math.round(props.data.temperature)}</span>
        <span id="unit">°C</span>
        <div className="weather-icon">
          <img
            src={props.data.icon}
            alt="weather icon"
            id="weather-icon"
            width="130"
          />
        </div>
        <div className="weather-conditions">
          <div id="weather-description">{props.data.description}</div>
          <div id="wind-speed">
            Wind speed: {Math.round(props.data.wind)} Km/h
          </div>
          <div id="humidity">Humidity: {Math.round(props.data.humidity)}%</div>
        </div>
      </div>
    </div>
  );
}

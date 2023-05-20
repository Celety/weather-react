import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast col-4">
      <ul className="list-group">
        <li className="list-group-item" id="forecast">
          <div className="WeatherForecast-day">mon</div>
          <div className="WeatherForecast-icon">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
              alt=""
              width="38"
            />
          </div>
          <div className="WeatherForecast-temp">
            <span className="temp-max">max</span>{" "}
            <span className="temp-min"> min</span>
          </div>
        </li>
        <li className="list-group-item" id="forecast">
          <div className="WeatherForecast-day">mon</div>
          <div className="WeatherForecast-icon">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
              alt=""
              width="38"
            />
          </div>
          <div className="WeatherForecast-temp">
            <span className="temp-max">max</span>{" "}
            <span className="temp-min"> min</span>
          </div>
        </li>
        <li className="list-group-item" id="forecast">
          <div className="WeatherForecast-day">mon</div>
          <div className="WeatherForecast-icon">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
              alt=""
              width="38"
            />
          </div>
          <div className="WeatherForecast-temp">
            <span className="temp-max">max</span>{" "}
            <span className="temp-min"> min</span>
          </div>
        </li>
        <li className="list-group-item" id="forecast">
          <div className="WeatherForecast-day">mon</div>
          <div className="WeatherForecast-icon">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
              alt=""
              width="38"
            />
          </div>
          <div className="WeatherForecast-temp">
            <span className="temp-max">max</span>{" "}
            <span className="temp-min"> min</span>
          </div>
        </li>
        <li className="list-group-item" id="forecast">
          <div className="WeatherForecast-day">mon</div>
          <div className="WeatherForecast-icon">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
              alt=""
              width="38"
            />
          </div>
          <div className="WeatherForecast-temp">
            <span className="temp-max">max</span>{" "}
            <span className="temp-min"> min</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

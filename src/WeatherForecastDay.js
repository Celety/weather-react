import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = [`SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <li className="list-group-item" id="forecast">
        <div className="WeatherForecast-day">{day()}</div>
        <div className="WeatherForecast-icon">
          <img
            src={props.data.condition.icon_url}
            alt={props.data.condition.icon}
            width="38"
          />
        </div>
        <div className="WeatherForecast-temp">
          <span className="temp-max">
            {Math.round(props.data.temperature.maximum)}°
          </span>{" "}
          <span className="temp-min">
            {Math.round(props.data.temperature.minimum)}°
          </span>
        </div>
      </li>
    </div>
  );
}

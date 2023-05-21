import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span id="temperature">{Math.round(props.celsius)}</span>
      <span id="unit">°C</span>
    </div>
  );
}

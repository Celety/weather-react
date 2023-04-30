import React from "react";
import "./DefaultInfo.css";

export default function DefaultInfo() {
  return (
    <div class="currentInfo>">
      <div class="city" id="current-city">
        WARSAW
      </div>
      <div class="day" id="current-day">
        Sunday 30, April
      </div>
      <div class="hour" id="current-hour">
        01:07
      </div>
      <div class="weather">
        <span id="temperature">12</span>
        <span id="unit">°C</span>
        <div class="weather-icon">
          <img
            id="weather-icon"
            src="http://openweathermap.org/img/wn/04n@2x.png"
            alt=""
            width="130"
          />
        </div>
        <div class="weather-conditions">
          <div id="weather-description">Broken Clouds</div>
          <div id="wind-speed">2.57 Km/H</div>
          <div id="humidity">70%</div>
        </div>
      </div>
    </div>
  );
}

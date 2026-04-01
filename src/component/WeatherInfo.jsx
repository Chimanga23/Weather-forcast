import React from "react";

export default function WeatherInfo({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-info">
      <h3>📍 {weather.name}</h3>
      <p>🌡️ Current Temperature: {weather.temp}°C</p>
      <p>☁️ Condition: {weather.condition}</p>
    </div>
  );
}
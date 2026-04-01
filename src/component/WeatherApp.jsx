import React from "react";
import { useWeatherData } from "../hooks/useWeatherData";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo.jsx";
import TemperatureChart from "./TemperatureChart";
import InsightBox from "./InsightBox";

export default function WeatherApp() {
  const {
    city,
    setCity,
    weather,
    forecast,
    insight,
    loading,
    handleSearch,
  } = useWeatherData();

  return (
    <div className="weather-container">
      <h2>🌤️ Weather Trend Planner</h2>
      <SearchBar 
        city={city} 
        setCity={setCity} 
        onSearch={handleSearch} 
        loading={loading}
      />
      {loading && <div className="loading-text">⏳ Loading weather data...</div>}
      {weather && <WeatherInfo weather={weather} />}
      {forecast && <TemperatureChart forecast={forecast} />}
      {insight && <InsightBox insight={insight} />}
    </div>
  );
}
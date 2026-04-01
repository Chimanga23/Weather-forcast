import { useState } from "react";
import { fetchWeather, fetchWithTimeout } from "../utils/weatherAPI";
import { processForecast, extractWeatherInfo } from "../utils/dataProcessor";
import { generateInsight } from "../utils/insightGenerator";

export function useWeatherData() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [insight, setInsight] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city.trim()) {
      setInsight("⚠️ Please enter a city name.");
      return;
    }

    setLoading(true);
    try {
      const data = await fetchWithTimeout(fetchWeather(city), 10000);
      const weatherInfo = extractWeatherInfo(data);
      setWeather(weatherInfo);

      const processed = processForecast(data);
      setForecast(processed);

      const insightText = generateInsight(processed, data.city.name, data.list);
      setInsight(insightText);
    } catch (error) {
      console.error(error);
      setWeather(null);
      setForecast([]);
      if (error.message === "Request timed out") {
        setInsight("⏱️ Request took too long. Please try again.");
      } else {
        setInsight(
          "❌ City not found or error fetching data. Please check the city name."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const resetData = () => {
    setCity("");
    setWeather(null);
    setForecast([]);
    setInsight("");
  };

  return {
    city,
    setCity,
    weather,
    forecast,
    insight,
    loading,
    handleSearch,
    resetData,
  };
}

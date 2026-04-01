export function generateInsight(data, cityName, rawList) {
  // Find lowest temperature day
  let bestDay = data[0];
  data.forEach((day) => {
    if (day.temp < bestDay.temp) bestDay = day;
  });

  // Rain probability check
  const rainDay = rawList.find((item) => item.pop && item.pop > 0.6);
  if (rainDay) {
    const rainDate = rainDay.dt_txt.split(" ")[0];
    return `🌧️ Rain expected in ${cityName} on ${rainDate}`;
  }

  // Heat warning
  if (bestDay.temp > 35) {
    return `🔥 Very hot day expected in ${cityName} on ${bestDay.date} (${bestDay.temp}°C)`;
  }

  // Cold warning
  if (bestDay.temp < 5) {
    return `❄️ Cold warning in ${cityName} on ${bestDay.date} (${bestDay.temp}°C)`;
  }

  // Default: best day to go out
  return `☀️ Best day to go out in ${cityName}: ${bestDay.date} (${bestDay.temp.toFixed(1)}°C)`;
}

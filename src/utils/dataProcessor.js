export function processForecast(data) {
  const dailyTemps = {};
  data.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!dailyTemps[date]) dailyTemps[date] = [];
    dailyTemps[date].push(item.main.temp);
  });

  return Object.keys(dailyTemps).map((date) => {
    const temps = dailyTemps[date];
    const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length;
    return { date, temp: avgTemp };
  });
}

export function extractWeatherInfo(data) {
  return {
    name: data.city.name,
    temp: data.list[0].main.temp,
    condition: data.list[0].weather[0].description,
  };
}

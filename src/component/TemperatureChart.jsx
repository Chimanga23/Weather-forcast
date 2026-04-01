import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function TemperatureChart({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  const chartData = {
    labels: forecast.map((f) => f.date),
    datasets: [
      {
        label: "Temperature (°C)",
        data: forecast.map((f) => f.temp),
        borderColor: "#0078d7",
        backgroundColor: "rgba(0,120,215,0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="chart-box">
      <h3>📈 Temperature Trend</h3>
      <Line data={chartData} />
    </div>
  );
}

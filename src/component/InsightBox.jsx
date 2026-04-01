import React from "react";

export default function InsightBox({ insight }) {
  if (!insight) return null;

  return (
    <div className="insight-box">
      <h3>💡 Insight:</h3>
      <p>{insight}</p>
    </div>
  );
}

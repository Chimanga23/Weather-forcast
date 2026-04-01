import React from "react";

export default function SearchBar({ city, setCity, onSearch, loading }) {
  return (
    <div className="search-box">
      <label>Enter city: </label>
      <input
        type="text"
        placeholder="City name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={loading}
        onKeyPress={(e) => e.key === "Enter" && onSearch()}
      />
      <button onClick={onSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}

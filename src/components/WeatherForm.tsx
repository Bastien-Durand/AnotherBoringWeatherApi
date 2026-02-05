import { useState } from "react";

interface UserInputLocation {
  name: string;
}

export const WeatherForm = (props: UserInputLocation) => {
  const [weatherLocation, setWeatherLocation] = useState({
    location: "",
  });

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(weatherLocation);
    props.onHoistUp(weatherLocation);
  };

  const handleChange = (data: React.ChangeEvent<HTMLInputElement>) => {
    setWeatherLocation({
      location: data.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter city name..."
          name="location"
          value={weatherLocation.location}
          onChange={handleChange}
          style={{
            flex: 1,
            padding: "12px 16px",
            fontSize: "16px",
            border: "2px solid #ddd",
            borderRadius: "8px",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Search
        </button>
      </div>
    </form>
  );
};

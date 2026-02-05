export const WeatherDisplay = ({ weatherData }: weatherDisplayProps) => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#F0EDEB",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ margin: "0 0 10px 0", fontSize: "28px" }}>
          {weatherData.name}, {weatherData.sys.country}
        </h2>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <p style={{ fontSize: "32px", margin: "10px 0" }}>
          {Math.round(weatherData.main.temp)}°C
        </p>
        <p style={{ textTransform: "capitalize" }}>
          {weatherData.weather[0].description}
        </p>
        <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
          <p>Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

import "./App.css";
import { useState } from "react";
import { WeatherForm } from "./components/WeatherForm";
import { WeatherDisplay } from "./components/WeatherDisplay";

interface WeatherData {
  name: string;
  sys: { country: string };
  main: { temp: number; feels_like: number; humidity: number };
  wind: { speed: number };
  weather: { description: string; icon: string }[];
}

const App = () => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  let locationHoisted = "";

  const [weatherData, setWeatherData] = useState<WeatherData | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (locationHoisted: string) => {
    setLoading(true);
    setError("");
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${locationHoisted}&limit=5&appid=${apiKey}`;
    try {
      const latLonResponse = await fetch(url);
      if (!latLonResponse.ok) {
        throw new Error(`latLonResponse status: ${latLonResponse.status}`);
      }
      const latLongConvertResult = await latLonResponse.json();
      const latitude = latLongConvertResult[0].lat;
      const longitude = latLongConvertResult[0].lon;
      const weatherResult = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
      );
      const fullyFormedWeatherData = await weatherResult.json();

      setWeatherData(fullyFormedWeatherData);
    } catch (error) {
      setError("City not found. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const hoistLocationUp = (data: string) => {
    locationHoisted = data;
    console.log(locationHoisted);
    fetchData(locationHoisted);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        🌤️ Weather App
      </h1>

      <WeatherForm hoistLocationUp={hoistLocationUp} />

      {loading && (
        <p style={{ textAlign: "center", fontSize: "18px", margin: "20px 0" }}>
          Loading weather data...
        </p>
      )}

      {error && (
        <p
          style={{
            color: "red",
            textAlign: "center",
            padding: "15px",
            backgroundColor: "#ffe6e6",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          {error}
        </p>
      )}

      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
};

export default App;

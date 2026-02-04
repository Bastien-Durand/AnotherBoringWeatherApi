import "./App.css";
import { WeatherForm } from "./components/WeatherForm";

const App = () => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchData = async () => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=Sydney&limit=5&appid=${apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const latLongConvertResult = await response.json();
      const latitude = latLongConvertResult[0].lat;
      const longitude = latLongConvertResult[0].lon;
      const weatherResult = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
      );
      const weatherData = await weatherResult.json();
      console.log(weatherData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const locationHoisted = "";

  const hoistLocationUp = (data) => {
    console.log(data);
    fetchData();
  };

  return (
    <>
      <h1>Weather API</h1>
      <WeatherForm onHoistUp={hoistLocationUp} />
    </>
  );
};

export default App;

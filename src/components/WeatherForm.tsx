import { useState } from "react";

export const WeatherForm = (props) => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={weatherLocation.location}
          onChange={handleChange}
        />
        <button
          type="submit"
          onClick={() => {
            console.log("Button clicked");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

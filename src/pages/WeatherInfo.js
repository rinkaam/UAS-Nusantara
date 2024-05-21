import React from "react";
import "./weather.css";
const WeatherCard = ({ title, value }) => {
  return (
    <div className="weather-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

const WeatherInfo = ({ weatherData }) => {
  return (
    <section className="weather-info">
      <h2>Weather Information</h2>
      <div className="weather-cards">
        <WeatherCard title="Location" value={weatherData.location.city} />
        <WeatherCard
          title="Temperature"
          value={`${weatherData.current_observation.condition.temperature}°F`}
        />
        <WeatherCard
          title="Condition"
          value={weatherData.current_observation.condition.text}
        />
        <WeatherCard
          title="Humidity"
          value={`${weatherData.current_observation.atmosphere.humidity}%`}
        />
        <WeatherCard
          title="Wind Speed"
          value={`${weatherData.current_observation.wind.speed} mph`}
        />
        <WeatherCard
          title="Sunrise"
          value={weatherData.current_observation.astronomy.sunrise}
        />
        <WeatherCard
          title="Sunset"
          value={weatherData.current_observation.astronomy.sunset}
        />
      </div>
    </section>
  );
};

export default WeatherInfo;

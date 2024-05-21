import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import tarian from "../assets/tarian-tradisional.jpg";
import raja from "../assets/raja-ampat.jpg";
import makanan from "../assets/papeda.jpg";
import background1 from "../assets/papua1.jpg";
import background2 from "../assets/jayapura.jpg";
import background3 from "../assets/background2.jpg";
import WeatherInfo from "./WeatherInfo";

const backgroundImages = [background1, background2, background3];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      const options = {
        method: "GET",
        url: "https://yahoo-weather5.p.rapidapi.com/weather",
        params: {
          location: "jayapura",
          format: "json",
          u: "f",
        },
        headers: {
          "X-RapidAPI-Key":
            "95b2c40a5fmsh0c5044a40323044p132748jsn2305d485adf8",
          "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setWeatherData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
    >
      <header className="home-header">
        <h1>Selamat Datang di Papua</h1>
        <p>
          Selamat datang di situs Provinsi Papua, tempat Anda bisa menjelajahi
          keindahan dan keragaman budaya yang ada di Papua.
        </p>
      </header>
      <section className="home-highlights">
        <h2>Highlights Papua</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <h3>Objek Wisata</h3>
            <img src={raja} alt="Raja Ampat" />
            <p>Berbagai keindahan alam yang menjadi khas wisata Papua.</p>
          </div>
          <div className="highlight-item">
            <h3>Tarian Tradisional</h3>
            <img src={tarian} alt="Tarian tradisional" />
            <p>
              Berbagai tarian tradisional seperti tarian cendrawasih dan tarian
              yospan.
            </p>
          </div>
          <div className="highlight-item">
            <h3>Makanan Khas Daerah</h3>
            <img src={makanan} alt="Makanan" />
            <p>
              Berbagai makanan khas daerah Papua seperti papeda dan ikan bakar
              papua.
            </p>
          </div>
        </div>
      </section>
      {weatherData && <WeatherInfo weatherData={weatherData} />}
      {error && (
        <section className="weather-error">
          <h2>Error fetching weather data</h2>
          <p>{error.message}</p>
        </section>
      )}
    </div>
  );
}

export default Home;

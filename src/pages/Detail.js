import React from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "70vh",
  borderRadius: "10px",
};

const videos = {
  papeda: "https://www.youtube.com/embed/R-Kqkf9hO0g",
  "ikan-bakar-papua": "https://www.youtube.com/embed/zfhln8njmSQ",
  "sagu-lempeng": "https://www.youtube.com/embed/YVQ4ZhjpemA",
  "tarian-tradisional": "https://www.youtube.com/embed/8fvP3b_0WUg",
  "seni-ukir-kayu": "https://www.youtube.com/embed/rJG3CFBkJpA",
};

function Detail() {
  const { id } = useParams();
  let content, center, markerPosition;

  switch (id) {
    case "raja-ampat":
      center = { lat: -0.8667, lng: 130.8576 };
      markerPosition = center;
      content = (
        <div>
          <h2>Raja Ampat</h2>
          <p>
            Surga bagi penyelam dengan keindahan bawah lautnya yang menakjubkan,
            termasuk terumbu karang yang sangat kaya dan beragam.
          </p>
        </div>
      );
      break;
    case "danau-sentani":
      center = { lat: -2.5841, lng: 140.5168 };
      markerPosition = center;
      content = (
        <div>
          <h2>Danau Sentani</h2>
          <p>
            Danau alami yang indah dengan pulau-pulau kecil di tengahnya.
            Terkenal dengan Festival Danau Sentani yang menampilkan budaya dan
            kesenian lokal.
          </p>
        </div>
      );
      break;
    case "lorentz":
      center = { lat: -4.0833, lng: 137.2 };
      markerPosition = center;
      content = (
        <div>
          <h2>Taman Nasional Lorentz</h2>
          <p>
            Salah satu situs warisan dunia UNESCO yang menawarkan keindahan alam
            yang luar biasa, termasuk pegunungan, hutan hujan, dan flora serta
            fauna endemik.
          </p>
        </div>
      );
      break;
    case "papeda":
    case "ikan-bakar-papua":
    case "sagu-lempeng":
    case "tarian-tradisional":
    case "seni-ukir-kayu":
      content = (
        <div>
          <h2>{id.replace(/-/g, " ").toUpperCase()}</h2>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={videos[id]}
              title={id}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p>
            Sumber: <a href={videos[id]}>{videos[id]}</a>
          </p>
        </div>
      );
      break;
    default:
      content = (
        <div>
          <h2>Halaman tidak ditemukan</h2>
        </div>
      );
  }

  return (
    <div className="detail-container">
      {content}
      {id === "raja-ampat" || id === "danau-sentani" || id === "lorentz" ? (
        <LoadScript googleMapsApiKey="AIzaSyDS58eNTJMIYGvr2rvBbMriiZP9chXWqbY">
          <div className="map-container">
            <h2 className="map-title">Peta {id.replace(/-/g, " ")}</h2>
            <div
              className="map"
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={7}
              >
                <Marker position={markerPosition} />
              </GoogleMap>
            </div>
          </div>
        </LoadScript>
      ) : null}
    </div>
  );
}

export default Detail;

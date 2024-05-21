import React from "react";
import "./Papua.css";
import { Link } from "react-router-dom";
import rajaAmpatImage from "../assets/raja-ampat.jpg";
import danauSentaniImage from "../assets/danau-sentani.jpg";
import lorentzImage from "../assets/taman-nasional-lorentz.jpg";
import papedaImage from "../assets/papeda.jpg";
import ikanBakarImage from "../assets/ikan-bakar-papua.jpg";
import saguLempengImage from "../assets/sagu-lempeng.jpg";
import tarianImage from "../assets/tarian-tradisional.jpg";
import seniUkirImage from "../assets/seni-ukir-kayu.jpg";

function Papua() {
  return (
    <div className="papua">
      <header className="papua-header">
        <h1>Provinsi Papua</h1>
        <p>
          Tempat yang kaya akan keindahan alam, budaya yang unik, dan sejarah
          yang menarik.
        </p>
      </header>
      <section className="papua-info">
        <h2>Objek Wisata</h2>
        <div className="info-ctn">
          <div className="info-item">
            <Link to="/detail/raja-ampat">
              <img src={rajaAmpatImage} alt="Raja Ampat" />
              <h3>Raja Ampat</h3>
            </Link>
            <p>
              Surga bagi penyelam dengan keindahan bawah lautnya yang
              menakjubkan, termasuk terumbu karang yang sangat kaya dan beragam.
            </p>
          </div>
          <div className="info-item">
            <Link to="/detail/danau-sentani">
              <img src={danauSentaniImage} alt="Danau Sentani" />
              <h3>Danau Sentani</h3>
            </Link>
            <p>
              Danau alami yang indah dengan pulau-pulau kecil di tengahnya.
              Terkenal dengan Festival Danau Sentani yang menampilkan budaya dan
              kesenian lokal.
            </p>
          </div>
          <div className="info-item">
            <Link to="/detail/lorentz">
              <img src={lorentzImage} alt="Taman Nasional Lorentz" />
              <h3>Taman Nasional Lorentz</h3>
            </Link>
            <p>
              Salah satu situs warisan dunia UNESCO yang menawarkan keindahan
              alam yang luar biasa, termasuk pegunungan, hutan hujan, dan flora
              serta fauna endemik.
            </p>
          </div>
        </div>
      </section>

      <section className="papua-info">
        <h2>Makanan Khas Daerah</h2>
        <div className="info-ctn">
          <div className="info-item">
            <Link to="/detail/papeda">
              <img src={papedaImage} alt="Papeda" />
              <h3>Papeda</h3>
            </Link>
            <p>
              Makanan pokok dari sagu yang diolah menjadi bubur dan disajikan
              dengan ikan kuah atau daging.
            </p>
          </div>
          <div className="info-item">
            <Link to="/detail/ikan-bakar-papua">
              <img src={ikanBakarImage} alt="Ikan Bakar Papua" />
              <h3>Ikan Bakar Papua</h3>
            </Link>
            <p>Ikan segar yang dibakar dengan bumbu rempah khas Papua.</p>
          </div>
          <div className="info-item">
            <Link to="/detail/sagu-lempeng">
              <img src={saguLempengImage} alt="Sagu Lempeng" />
              <h3>Sagu Lempeng</h3>
            </Link>
            <p>Roti tipis yang terbuat dari tepung sagu kering.</p>
          </div>
        </div>
      </section>

      <section className="papua-info">
        <h2>Adat Budaya</h2>
        <div className="info-ctn">
          <div className="info-item">
            <Link to="/detail/tarian-tradisional">
              <img src={tarianImage} alt="Tarian Tradisional" />
              <h3>Tarian Tradisional</h3>
            </Link>
            <p>
              Berbagai tarian tradisional seperti tarian cendrawasih dan tarian
              yospan.
            </p>
          </div>
          <div className="info-item">
            <Link to="/detail/seni-ukir-kayu">
              <img src={seniUkirImage} alt="Seni Ukir Kayu" />
              <h3>Seni Ukir Kayu</h3>
            </Link>
            <p>
              Papua terkenal dengan seni ukir kayu yang indah, sering kali
              dihiasi dengan motif-motif alam dan budaya lokal.
            </p>
          </div>
        </div>
      </section>

      <section className="papua-info">
        <h2>Sejarah</h2>
        <div className="info-ctn">
          <div className="info-item">
            <h3>Perjalanan Budaya</h3>
            <p>
              Papua memiliki sejarah yang kaya akan perjalanan budaya, dengan
              berbagai kelompok etnis yang telah menghuni wilayah ini selama
              ribuan tahun.
            </p>
          </div>
          <div className="info-item">
            <h3>Penjajahan Kolonial</h3>
            <p>
              Sejarah modern Papua dipengaruhi oleh masa penjajahan kolonial
              oleh Belanda dan kemudian pengalihan kedaulatan kepada Indonesia
              pada tahun 1963.
            </p>
          </div>
          <div className="info-item">
            <h3>Konflik dan Otonomi Khusus</h3>
            <p>
              Sejak bergabung dengan Indonesia, Papua telah mengalami berbagai
              konflik politik dan perjuangan untuk otonomi khusus guna
              mempertahankan identitas budaya dan hak-hak mereka sebagai
              masyarakat adat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Papua;

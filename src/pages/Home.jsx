import { Link } from "react-router-dom";
import logo from "../images/iteration-1-images/logo.svg";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <header className="home-header">
        <div className="banner-container">
          <img src={logo} alt="logo" className="logo-item" />

          <span className="text-container">
            <h1>
              KOD ACIKTIRIR
              <br />
              PIZZA, DOYURUR
            </h1>
          </span>

          <Link id="btn" to="/order">
            ACIKTIM
          </Link>
        </div>
      </header>
      <section>
        <div className="menu-container">
          <a href="">
            <img src="/src/images/iteration-2-images/icons/1.svg" alt="" />
            YENİ! Kore
          </a>
          <a href="">
            <img src="/src/images/iteration-2-images/icons/2.svg" alt="" />
            Pizza
          </a>
          <a href="">
            <img src="/src/images/iteration-2-images/icons/3.svg" alt="" />
            Burger
          </a>
          <a href="">
            <img src="/src/images/iteration-2-images/icons/4.svg" alt="" />
            Kızartmalar
          </a>
          <a href="">
            <img src="/src/images/iteration-2-images/icons/5.svg" alt="" />
            Fast food
          </a>
          <a href="">
            <img src="/src/images/iteration-2-images/icons/6.svg" alt="" />
            Gazlı İçecek
          </a>
        </div>
      </section>
      <section className="main-container">
        <div className="main-section">
          <div className="campaign-items">
            <div className="first-item">
              <h2>
                Özel <br />
                Lezzetus
              </h2>
              <p>Position:Absolute Acı Burger</p>
              <a href="">SİPARİŞ VER</a>
            </div>
            <div className="column-items">
              <div className="item">
                <h2>
                  Hackathlon <br />
                  Burger Menü
                </h2>
                <a href="">SİPARİŞ VER</a>
              </div>
              <div className="item">
                <h2>
                  <span style={{ color: "#ce2829" }}>Çoooook</span> hızlı <br />
                  npm gibi kurye
                </h2>
                <a href="">SİPARİŞ VER</a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-middle-section">
          <p>en çok paketlenen menüler</p>
          <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
          <div className="middle-nav">
            <a href="">
              <img src="/src/images/iteration-2-images/icons/1.svg" alt="" />
              Ramen
            </a>
            <a href="">
              <img src="/src/images/iteration-2-images/icons/2.svg" alt="" />
              Pizza
            </a>
            <a href="">
              <img src="/src/images/iteration-2-images/icons/3.svg" alt="" />
              Burger
            </a>
            <a href="">
              <img src="/src/images/iteration-2-images/icons/4.svg" alt="" />
              French fries
            </a>
            <a href="">
              <img src="/src/images/iteration-2-images/icons/5.svg" alt="" />
              Fast food
            </a>
            <a href="">
              <img src="/src/images/iteration-2-images/icons/6.svg" alt="" />
              Soft drinks
            </a>
          </div>
        </div>
        <div className="main-bottom-section">
          <a href="">
            <img
              src="/src/images/iteration-2-images/pictures/food-1.png"
              alt=""
            />
            <div className="price-container">
              <h4>Terminal Pizza</h4>
              <div className="price-text">
                <p>4.9</p>
                <div className="price-text-right">
                  <p>(200)</p>
                  <p className="price">60₺</p>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <img
              src="/src/images/iteration-2-images/pictures/food-2.png"
              alt=""
            />
            <div className="price-container">
              <h4>Position Absolute Acı Pizza</h4>
              <div className="price-text">
                <p>4.9</p>
                <div className="price-text-right">
                  <p>(200)</p>
                  <p className="price">60₺</p>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <img
              src="/src/images/iteration-2-images/pictures/food-3.png"
              alt=""
            />
            <div className="price-container">
              <h4>useEffect Tavuklu Burger</h4>
              <div className="price-text">
                <p>4.9</p>
                <div className="price-text-right">
                  <p>(200)</p>
                  <p className="price">60₺</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

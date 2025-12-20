import { Link } from "react-router-dom";
import logo from "../images/iteration-1-images/logo.svg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <header className="home-header">
        <div className="banner-container">
          <img src={logo} alt="logo" className="logo-item" />

          <span className="text-container">
            <p>fırsatı kaçırma</p>
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
    </>
  );
}

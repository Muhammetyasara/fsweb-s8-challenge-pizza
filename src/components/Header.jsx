import { NavLink } from "react-router-dom";
import logo from "../images/iteration-1-images/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Teknolojik Yemekler" />

        <div className="link-container">
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Anasayfa
          </NavLink>
          <span className="separator">-</span>
          <NavLink to="/order" className="nav-link" activeClassName="active">
            Sipariş Oluştur
          </NavLink>
        </div>
      </div>
    </header>
  );
}

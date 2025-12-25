import logoFooter from "../images/iteration-2-images/footer/logo-footer.svg";

import icon1 from "../images/iteration-2-images/footer/icons/icon-1.png";
import icon2 from "../images/iteration-2-images/footer/icons/icon-2.png";
import icon3 from "../images/iteration-2-images/footer/icons/icon-3.png";

import insta0 from "../images/iteration-2-images/footer/insta/li-0.png";
import insta1 from "../images/iteration-2-images/footer/insta/li-1.png";
import insta2 from "../images/iteration-2-images/footer/insta/li-2.png";
import insta3 from "../images/iteration-2-images/footer/insta/li-3.png";
import insta4 from "../images/iteration-2-images/footer/insta/li-4.png";
import insta5 from "../images/iteration-2-images/footer/insta/li-5.png";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="contact-menu-container">
          <div className="main-left-side">
            <img id="footer-logo" src={logoFooter} alt="Footer logo" />

            <div className="contact-container">
              <ul>
                <li>
                  <img src={icon1} alt="" />
                  <p id="texts">341 Londonderry Road, Istanbul Türkiye</p>
                </li>
                <li>
                  <img src={icon2} alt="" />
                  <p id="texts">aciktim@teknolojikyemekler.com</p>
                </li>
                <li>
                  <img src={icon3} alt="" />
                  <p id="texts">+90 216 123 45 67</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="main-right-side">
            <h5>Hot Menu</h5>
            <ul>
              <li>
                <a href="">Terminal Pizza</a>
              </li>
              <li>
                <a href="">5 Kişilik Hackathlon Pizza</a>
              </li>
              <li>
                <a href="">useEffect Tavuklu Pizza</a>
              </li>
              <li>
                <a href="">Beyaz Console Frosty</a>
              </li>
              <li>
                <a href="">Testler Geçti Mutlu Burger</a>
              </li>
              <li>
                <a href="">Position Absolute Acı Burger</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-side">
          <h5>Instagram</h5>
          <ul>
            <li>
              <img src={insta0} alt="" />
            </li>
            <li>
              <img src={insta1} alt="" />
            </li>
            <li>
              <img src={insta2} alt="" />
            </li>
            <li>
              <img src={insta3} alt="" />
            </li>
            <li>
              <img src={insta4} alt="" />
            </li>
            <li>
              <img src={insta5} alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-items">
          <p>@ 2023 Teknolojik Yemekler.</p>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

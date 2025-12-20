import logo from "../images/iteration-1-images/logo.svg";
import "./Success.css";

export default function Success() {
  return (
    <>
      <div className="success-container">
        <img src={logo} alt="logo" id="logo-item" />

        <h1 className="success-h1">
          TEBRİKLER! <br />
          SİPARİŞİNİZ ALINDI!
        </h1>
      </div>
    </>
  );
}

import logo from "../images/iteration-1-images/logo.svg";
import "./Success.css";
import Footer from "../components/Footer";

export default function Success({ orderData }) {
  if (!orderData) {
    return null;
  }

  const { size, dough, ingredients, ingredientsPrice, totalPrice, note } = orderData;

  return (
    <>
      <div className="success-container">
        <img src={logo} alt="logo" id="logo-item" />
        <p
          style={{
            color: "#FDC913",
            fontFamily: "'Satisfy', cursive",
            fontSize: "32px",
          }}
        >
          lezzetin yolda
        </p>
        <h1 className="success-h1">SİPARİŞ ALINDI!</h1>
        <span className="success-border"></span>
        <section className="summary-success">
          <div className="summary-info-group">
            <h2 className="pizza-title">Position Absolute Acı Pizza</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: ".5rem" }}>
              <p style={{ fontWeight: "bold" }}>Boyut:</p> <p> {size}</p>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: ".5rem" }}>
              <p style={{ fontWeight: "bold" }}>Hamur:</p> <p> {dough}</p>
            </div>

            <div className="extras">
              <p className="extras-title">Ek Malzemeler:</p>
              <p className="extras-text">{ingredients.join(", ")}</p>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: ".5rem" }}>
             <p style={{ fontWeight: "bold" }}>Not: </p> <p> {note}</p>
            </div>
          </div>

          <div className="summary-price-group">
            <h3>Sipariş Toplamı</h3>

            <div className="price-row">
              <span>Seçimler</span>
              <span>{ingredientsPrice.toFixed(2)}₺</span>
            </div>

            <div className="price-row total">
              <span>Toplam</span>
              <span>{totalPrice.toFixed(2)}₺</span>
            </div>
          </div>
        </section>
      </div>
      <Footer className="success-footer" />
    </>
  );
}

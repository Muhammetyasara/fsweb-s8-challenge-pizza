import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import "./OrderForm.css";

const INGREDIENTS = [
  "Pepperoni",
  "Sosis",
  "Mantar",
  "Zeytin",
  "Biber",
  "Mısır",
  "Sucuk",
  "Soğan",
  "Ananas",
  "Peynir",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Sarımsak",
  "Kabak",
];

const BASE_PRICE = 85.5;
const INGREDIENT_PRICE = 5;

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    size: "",
    dough: "",
    ingredients: [],
    note: "",
  });

  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleIngredientChange(e) {
    const { value, checked } = e.target;
    setFormData({
      ...formData,
      ingredients: checked
        ? [...formData.ingredients, value]
        : formData.ingredients.filter((i) => i !== value),
    });
  }

  useEffect(() => {
    const valid =
      formData.name.length >= 3 &&
      formData.size &&
      formData.dough &&
      formData.ingredients.length >= 4 &&
      formData.ingredients.length <= 10;
    setIsValid(valid);
  }, [formData]);

  const ingredientsPrice = formData.ingredients.length * INGREDIENT_PRICE;
  const totalPrice = BASE_PRICE + ingredientsPrice;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;

    axios.post(
      "https://reqres.in/api/pizza",
      { ...formData, totalPrice },
      { headers: { "x-api-key": "reqres-free-v1" } }
    );
  }

  return (
    <>
      <Header />

      <main className="order-page">
        <div className="order-container">
          <section className="product-info">
            <h1>Position Absolute Acı Pizza</h1>

            <div className="meta">
              <span className="price">{BASE_PRICE.toFixed(2)}₺</span>
              <div className="meta-right-side">
                <span>4.9</span>
                <span>(200)</span>
              </div>
            </div>

            <p className="description">
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </section>

          <form className="order-form" onSubmit={handleSubmit}>
            <section className="form-left">
              <section className="size-dough">
                <section className="size-selection">
                  <h3>
                    Boyut Seç <span style={{ color: "#CE2829" }}>*</span>
                  </h3>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      value="small"
                      onChange={handleChange}
                    />
                    Küçük
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      value="medium"
                      onChange={handleChange}
                    />
                    Orta
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      value="large"
                      onChange={handleChange}
                    />
                    Büyük
                  </label>
                </section>

                <section className="dough-selection">
                  <h3>
                    Hamur Seç <span style={{ color: "#CE2829" }}>*</span>
                  </h3>
                  <select
                    name="dough"
                    value={formData.dough}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Hamur Kalınlığı
                    </option>
                    <option value="thin">İnce</option>
                    <option value="thick">Kalın</option>
                  </select>
                </section>
              </section>

              <section className="ingredients-selection">
                <div className="ingredients-top">
                  <h3>
                    Ek Malzemeler <br />{" "}
                  </h3>
                  <span id="extras-text">
                    En fazla 10 malzeme seçebilirsiniz. 5₺
                  </span>
                </div>
                <div className="ingredients">
                  {INGREDIENTS.map((item) => (
                    <label key={item}>
                      <input
                        type="checkbox"
                        value={item}
                        checked={formData.ingredients.includes(item)}
                        onChange={handleIngredientChange}
                        disabled={
                          !formData.ingredients.includes(item) &&
                          formData.ingredients.length >= 10
                        }
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </section>

              <section className="customer-info">
                <h2>İsim</h2>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Lütfen isim giriniz."
                  id="customer-name-text"
                />
              </section>

              <section className="note-section">
                <h2>Sipariş Notu</h2>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  placeholder="Siparişine eklemek istediğin bir not var mı?"
                  id="note-text"
                />
              </section>
            </section>

            <div className="divider"></div>

            <aside className="form-bottom">
              <section className="item-value">
                <span id="top-item">-</span>
                <span id="middle-item">1</span>
                <span id="bottom-item">+</span>
              </section>
              <section className="summary-section">
                <section className="summary">
                  <h3>Sipariş Toplamı</h3>
                  <span>
                    <p className="summary-chose">Seçimler:</p>
                    <p className="summary-chose">
                      {ingredientsPrice.toFixed(2)}₺
                    </p>
                  </span>

                  <span>
                    <p className="summary-total">Toplam:</p>
                    <p className="summary-total">{totalPrice.toFixed(2)}₺</p>
                  </span>
                </section>

                <button type="submit" disabled={!isValid}>
                  SİPARİŞ VER
                </button>
              </section>
            </aside>
          </form>
        </div>
      </main>
    </>
  );
}

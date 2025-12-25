import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import OrderForm from "./pages/OrderForm";
import Home from "./pages/Home";
import Success from "./pages/Success";

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/order">
        <OrderForm setOrderData={setOrderData} />
      </Route>

      <Route path="/success">
        <Success orderData={orderData} />
      </Route>
    </Switch>
  );
}

export default App;
